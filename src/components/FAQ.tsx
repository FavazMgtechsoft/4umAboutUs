import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Loader2, AlertCircle } from 'lucide-react';
import { fetchFaqs } from '../services/contentfulService';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';


export function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedAnswers, setExpandedAnswers] = useState({});

  useEffect(() => {
    loadFaqs();
  }, []);

  const loadFaqs = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchFaqs();

    if (result.success) setFaqs(result.data);
    else setError(result.error);

    setLoading(false);
  };

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);
  
  const richTextOptions = {
    renderNode: {
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul
          style={{
            listStyleType: 'disc',
            paddingLeft: '1.25rem',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <ol
          style={{
            listStyleType: 'decimal',
            paddingLeft: '1.25rem',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
          }}
        >
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (_, children) => (
        <li style={{ display: 'list-item', marginLeft: '0.25rem' }}>{children}</li>
      ),
    },
  };

  const toggleReadMore = (index) =>
    setExpandedAnswers((prev) => ({ ...prev, [index]: !prev[index] }));


  if (loading) {
    return (
      <section className="py-16 sm:py-24 bg-white flex justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 text-[#028383] animate-spin mb-3 mx-auto" />
          <p className="text-gray-600">Loading FAQs...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 sm:py-24 bg-white flex justify-center">
        <div className="text-center">
          <AlertCircle className="w-10 h-10 text-red-500 mb-3 mx-auto" />
          <p className="text-gray-900 font-semibold mb-1">Failed to load FAQs</p>
          <p className="text-gray-600 mb-3">{error}</p>
          <button onClick={loadFaqs} className="px-5 py-2 bg-[#028383] text-white rounded-full">
            Try Again
          </button>
        </div>
      </section>
    );
  }

  if (faqs.length === 0) {
    return (
      <section className="py-16 sm:py-24 bg-white text-center">
        <p className="text-gray-600">No FAQs available.</p>
      </section>
    );
  }

  return (
    <section id="faq" className="py-2 sm:py-2 bg-white" style={{paddingTop:'200px'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-center mb-10 text-gray-900">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isExpanded = expandedAnswers[index];

            return (
              <div
                key={faq.id}
                className="border"
                style={{ borderColor: '#028383', borderRadius: '15px', padding: '0 10px' }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="text-gray-900">{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#028383]" /> : <ChevronDown className="w-5 h-5 text-[#028383]" />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                        <div 
                          ref={(el) => {
                            if (el && !expandedAnswers.hasOwnProperty(index)) {
                              const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
                              const height = el.scrollHeight;
                              const lines = Math.round(height / lineHeight);
                              if (lines > 2) {
                                setExpandedAnswers((prev) => ({ ...prev, [index]: false }));
                              }
                            }
                          }}
                          className={!isExpanded && expandedAnswers.hasOwnProperty(index) ? 'line-clamp-2' : ''}
                        >
                          {documentToReactComponents(faq.answer, richTextOptions)}
                        </div>
                        {expandedAnswers.hasOwnProperty(index) && (
                          <button onClick={() => toggleReadMore(index)} className="mt-2 text-sm underline text-[#028383]">
                            {isExpanded ? 'Show less' : 'Show more'}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-center text-gray-500 text-sm mt-8" style={{borderTop:'1px solid #d9d9d9',paddingTop:'20px'}}>© 2024 4um. All rights reserved.</p>
      </div>
    </section>
  );
}