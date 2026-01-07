import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User, Loader2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { fetchBlogPosts } from '../services/contentfulService';

export function InsightsSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    setLoading(true);
    setError(null);
    
    const result = await fetchBlogPosts();
    
    if (result.success) {
      setArticles(result.data);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  const handleArticleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  // Loading state
  if (loading) {
    return (
      <section id="insights" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-[#028383] animate-spin mb-4" />
            <p className="text-gray-600">Loading insights...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="insights" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <p className="text-gray-900 font-semibold mb-2">Failed to load insights</p>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={loadBlogPosts}
              className="px-6 py-2 bg-[#028383] text-white rounded-full hover:bg-[#026e6e] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (articles.length === 0) {
    return (
      <section id="insights" className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[#028383] uppercase tracking-wider text-sm">Insights & Stories</span>
            <h2 className="mt-3 sm:mt-4 text-gray-900 mb-4 sm:mb-6">Latest from 4um</h2>
            <p className="text-gray-600">No blog posts available yet. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  // Get featured article (latest one)
  const featuredArticle = articles[0];
  // Get remaining articles for grid
  const gridArticles = articles.slice(1);

  return (
    <section id="insights" className="pt-16 sm:pt-24 lg:pt-32 pb-10 bg-white" style={{paddingTop:'186px'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="text-[#028383] uppercase tracking-wider text-sm">Insights & Stories</span>
          <h2 className="mt-3 sm:mt-4 text-gray-900 mb-4 sm:mb-6">Latest from 4um</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Dive into our latest updates, community stories, and insights about the future of
            social connection.
          </p>
        </motion.div>

        {/* Featured Article - Latest Blog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div 
            onClick={() => handleArticleClick(featuredArticle.id)}
            className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center bg-gradient-to-br from-[#028383]/5 to-teal-50 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video lg:aspect-auto lg:h-full relative overflow-hidden">
              <ImageWithFallback
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#028383] text-white rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
                Featured
              </div>
              <h3 className="text-gray-900 mb-3 sm:mb-4">{featuredArticle.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-500 mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{featuredArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredArticle.date}</span>
                </div>
                {/* <span>{featuredArticle.readTime}</span> */}
              </div>
              <button className="group text-[#028383] flex items-center gap-2 hover:gap-3 transition-all">
                Read Full Story
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Article Grid - Remaining Blogs */}
        {gridArticles.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleArticleClick(article.id)}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs text-[#028383]">
                      {article.category}
                    </span>
                  </div> */}
                   <div style={{display:'flex',alignItems:'end',justifyContent:'end',marginTop:'-10px'}}>
                  <div style={{background:"white",padding:'5px 10px',fontWeight:'700'}} className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#028383] px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    {article.category}
                  </div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#028383] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{article.author}</span>
                    </div>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    {/* <span>{article.readTime}</span> */}
                  </div>
                  <button className="group/btn text-[#028383] text-sm flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View All Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 lg:mt-16"
        >
          <button className="px-8 py-4 border-2 border-[#028383] text-[#028383] rounded-full hover:bg-[#028383] hover:text-white transition-all duration-300">
            View All Insights
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}