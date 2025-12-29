import { useEffect, useState } from "react";
import { Box, Typography, IconButton, CircularProgress, Alert } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { fetchBlogPostById } from "../services/contentfulService";

export default function BlogReadingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    load();
  }, [id]);

  const load = async () => {
    const res = await fetchBlogPostById(id!);
    if (res.success) setBlogPost(res.data);
    else setError(res.error);
    setLoading(false);
  };

  if (loading) return <CircularProgress sx={{ m: 10 }} />;
  if (error || !blogPost)
    return (
      <Box p={4}>
        <Alert severity="error">{error || "Not found"}</Alert>
      </Box>
    );

  const template = blogPost.resolvedTemplate;

  if (!template) {
    return (
      <Box p={4}>
        <Alert severity="error">Blog content is not linked properly.</Alert>
      </Box>
    );
  }

  return (
    <Box maxWidth="800px" mx="auto" p={3}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIos fontSize="small" /> Back
      </IconButton>

      <Typography variant="h3" mb={2}>
        {blogPost.fields.title || template.fields.blogTitle}
      </Typography>

      {blogPost.resolvedCoverImage && (
        <img
          src={`https:${blogPost.resolvedCoverImage.fields.file.url}`}
          style={{ width: "100%", borderRadius: 8 }}
        />
      )}

      <Box mt={4}>
        {documentToReactComponents(template.fields.description, {
          renderNode: {
            [BLOCKS.PARAGRAPH]: (_, children) => (
              <Typography mb={2} lineHeight="32px">
                {children}
              </Typography>
            ),
            [INLINES.HYPERLINK]: (node, children) => (
              <a href={node.data.uri} target="_blank" rel="noreferrer">
                {children}
              </a>
            ),
          },
        })}
      </Box>
    </Box>
  );
}
