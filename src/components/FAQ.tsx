import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is 4um?",
    answer:
      "4um is a community-first social platform built to help people connect, share ideas, and express creativity without algorithm-driven manipulation.",
  },
  {
    question: "Is 4um free to use?",
    answer:
      "Yes, 4um is completely free to join and use. We aim to keep the core experience accessible to everyone while building sustainable features for the future.",
  },
  {
    question: "What type of content can I share?",
    answer:
      "You can share text posts, images, videos, stories, and more. 4um supports multiple content formats so creators and users can express themselves freely across different mediums.",
  },
  {
    question: "How does 4um protect user safety?",
    answer:
      "We use a combination of community guidelines, reporting tools, and moderation systems to ensure a safe, respectful, and inclusive environment for all users.",
  },
  {
    question: "Will 4um use algorithms to control my feed?",
    answer:
      "No. 4um does not use opaque algorithms to manipulate what you see. Your feed is driven by real connections and content you choose to follow.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expandedAnswers, setExpandedAnswers] = useState<Record<number, boolean>>({});

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleReadMore = (index: number) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-center mb-10 text-gray-900">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const isExpanded = expandedAnswers[index];

            return (
              <div
                key={index}
                className="border"
                style={{
                  borderColor: "#028383",
                  borderRadius: "15px",
                  paddingLeft:'10px',
                  paddingRight:'10px',
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="text-gray-900">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#028383]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#028383]" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                        <p
                          className={
                            !isExpanded
                              ? "line-clamp-2"
                              : ""
                          }
                        >
                          {faq.answer}
                        </p>

                        {faq.answer.length > 120 && (
                          <button
                            onClick={() => toggleReadMore(index)}
                            className="mt-2 text-sm underline"
                            style={{ color: "#028383" }}
                          >
                            {isExpanded ? "Show less" : "Show more"}
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
    </section>
  );
}
