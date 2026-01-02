// const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE;
// const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
// const ENVIRONMENT = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master";

// /* Helpers */

// const richTextToPlainText = (richText) => {
//   if (!richText?.content) return "";
//   let text = "";
//   const walk = (n) => {
//     if (n.nodeType === "text") text += n.value + " ";
//     n.content?.forEach(walk);
//   };
//   richText.content.forEach(walk);
//   return text.trim();
// };

// const getAssetUrl = (assets, id) => {
//   const a = assets.find((x) => x.sys.id === id);
//   return a?.fields?.file?.url ? `https:${a.fields.file.url}` : null;
// };

// const formatDate = (d) =>
//   new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

// const calculateReadTime = (text) => `${Math.ceil(text.split(/\s+/).length / 200)} min read`;



// /* LIST PAGE */

// export const fetchBlogPosts = async () => {
//   try {
//     const res = await fetch(
//       `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?access_token=${ACCESS_TOKEN}&content_type=blogPost&order=-sys.createdAt&include=3`
//     );

//     const data = await res.json();
//     const assets = data.includes?.Asset || [];
//     const entries = data.includes?.Entry || [];

//     const articles = data.items.map((post) => {
//       const templateId = post.fields.templates?.[0]?.sys?.id;
//       const template = entries.find((e) => e.sys.id === templateId);

//       const plain = template?.fields?.description
//         ? richTextToPlainText(template.fields.description)
//         : "";

//       const imageId =
//         post.fields.coverImage?.sys?.id ||
//         template?.fields.blogCoverImage?.[0]?.sys?.id;

//       return {
//         id: post.sys.id,
//         title: post.fields.title || template?.fields?.blogTitle || "Untitled",
//         excerpt: plain.slice(0, 200) + "...",
//         image: getAssetUrl(assets, imageId),
//         author: post.fields.author || "Team 4um",
//         date: formatDate(post.sys.createdAt),
//         readTime: calculateReadTime(plain),
//         category: post.fields.categoryCard || "Article",
//       };
//     });

//     return { success: true, data: articles };
//   } catch (e) {
//     return { success: false, error: e.message, data: [] };
//   }
// };



// /* READING PAGE */
// export const fetchBlogPostById = async (id) => {
//   try {
//     // Fetch blogPost
//     const postRes = await fetch(
//       `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${id}?access_token=${ACCESS_TOKEN}`
//     );
//     if (!postRes.ok) throw new Error(`Failed: ${postRes.status}`);
//     const post = await postRes.json();

//     // Resolve template
//     const templateId = post.fields.templates?.[0]?.sys?.id;
//     if (!templateId) throw new Error("No blogContent linked");

//     const templateRes = await fetch(
//       `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${templateId}?access_token=${ACCESS_TOKEN}`
//     );
//     if (!templateRes.ok) throw new Error(`Failed template: ${templateRes.status}`);
//     const template = await templateRes.json();

//     // Resolve cover image asset
//     let coverImage = null;
//     if (post.fields.coverImage?.sys?.id) {
//       const assetRes = await fetch(
//         `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${post.fields.coverImage.sys.id}?access_token=${ACCESS_TOKEN}`
//       );
//       if (assetRes.ok) coverImage = await assetRes.json();
//     }

//     return {
//       success: true,
//       data: {
//         ...post,
//         resolvedTemplate: template,
//         resolvedCoverImage: coverImage,
//       },
//     };
//   } catch (e) {
//     return { success: false, error: e.message, data: null };
//   }
// };



const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const ENVIRONMENT = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master";

/* Helpers */

const richTextToPlainText = (richText) => {
  if (!richText?.content) return "";
  let text = "";
  const walk = (n) => {
    if (n.nodeType === "text") text += n.value + " ";
    n.content?.forEach(walk);
  };
  richText.content.forEach(walk);
  return text.trim();
};

const getAssetUrl = (assets, id) => {
  const a = assets.find((x) => x.sys.id === id);
  return a?.fields?.file?.url ? `https:${a.fields.file.url}` : null;
};

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

const calculateReadTime = (text) => `${Math.ceil(text.split(/\s+/).length / 200)} min read`;


/* LIST PAGE */

export const fetchBlogPosts = async () => {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?access_token=${ACCESS_TOKEN}&content_type=blogPost&order=-sys.createdAt&include=3`
    );

    const data = await res.json();
    const assets = data.includes?.Asset || [];
    const entries = data.includes?.Entry || [];

    const articles = data.items.map((post) => {
      const templateId = post.fields.templates?.[0]?.sys?.id;
      const template = entries.find((e) => e.sys.id === templateId);

      const plain = template?.fields?.description
        ? richTextToPlainText(template.fields.description)
        : "";

      const imageId =
        post.fields.coverImage?.sys?.id ||
        template?.fields.blogCoverImage?.[0]?.sys?.id;

      return {
        id: post.sys.id,
        title: post.fields.title || template?.fields?.blogTitle || "Untitled",
        excerpt: plain.slice(0, 200) + "...",
        image: getAssetUrl(assets, imageId),
        author: post.fields.author || "Team 4um",
        date: formatDate(post.sys.createdAt),
        readTime: calculateReadTime(plain),
        category: post.fields.categoryCard || "Article",
      };
    });

    return { success: true, data: articles };
  } catch (e) {
    return { success: false, error: e.message, data: [] };
  }
};


/* READING PAGE */
export const fetchBlogPostById = async (id) => {
  try {
    const postRes = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${id}?access_token=${ACCESS_TOKEN}`
    );
    if (!postRes.ok) throw new Error(`Failed: ${postRes.status}`);
    const post = await postRes.json();

    const templateId = post.fields.templates?.[0]?.sys?.id;
    if (!templateId) throw new Error("No blogContent linked");

    const templateRes = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries/${templateId}?access_token=${ACCESS_TOKEN}`
    );
    if (!templateRes.ok) throw new Error(`Failed template: ${templateRes.status}`);
    const template = await templateRes.json();

    let coverImage = null;
    if (post.fields.coverImage?.sys?.id) {
      const assetRes = await fetch(
        `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets/${post.fields.coverImage.sys.id}?access_token=${ACCESS_TOKEN}`
      );
      if (assetRes.ok) coverImage = await assetRes.json();
    }

    return {
      success: true,
      data: {
        ...post,
        resolvedTemplate: template,
        resolvedCoverImage: coverImage,
      },
    };
  } catch (e) {
    return { success: false, error: e.message, data: null };
  }
};


/* FAQ PAGE — NEW (safe add) */
export const fetchFaqs = async () => {
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?access_token=${ACCESS_TOKEN}&content_type=faq&order=sys.createdAt`
    );

    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const data = await res.json();

    const faqs = data.items.map((item) => ({
      id: item.sys.id,
      question: item.fields.questions,
      answer: item.fields.answers,
    }));

    
    return { success: true, data: faqs };
  } catch (e) {
    return { success: false, error: e.message, data: [] };
  }
};
