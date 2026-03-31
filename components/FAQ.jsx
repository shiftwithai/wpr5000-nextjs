'use client';

import { useState } from 'react';

const faqData = [
  {
    question: 'What happens if we need service or support?',
    answer: <>Proax provides <a href="https://proax.ca/en/services/robot-maintenance-services" target="_blank" rel="noopener noreferrer" className="faq-link">local support</a> backed by ABB's global network. Our service team responds within 24 hours, with most issues resolved remotely through digital diagnostics. We maintain local parts inventory and offer comprehensive service agreements for predictable maintenance costs.</>,
  },
  {
    question: 'Can we start with one application and expand later?',
    answer: 'Absolutely. This is the recommended approach. Start with your highest-value application, prove the concept, build internal expertise, then expand. Our modular approach and standardized platforms make scaling cost-effective. Many customers begin with one robot and deploy 5-10 within two years.',
  },
  {
    question: 'Do our operators need extensive training?',
    answer: 'Minimal training required. The Wizard programming interface is designed for production personnel, not programmers. Most operators become proficient in 2-3 days. ABB Robotics Academy provides online resources, and Proax offers hands-on training at your facility.',
  },
  {
    question: 'What is an ABB Value Provider?',
    answer: "An ABB Value Provider is an accredited partner in ABB's premium global channel program. Value Providers have met rigorous standards for technical expertise, service quality, and integrity, ensuring customers receive the highest level of support for ABB robotics and automation solutions.",
  },
  {
    question: 'How do we get started?',
    answer: 'Contact Proax for a free automation assessment. Our team evaluates your application, provides ROI analysis, and recommends the optimal approach. We can arrange installation demonstrations so you see the technology in action before making decisions.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        <p className="faq-subheading">
          Get answers to common questions about ABB robotics and working with Proax
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <svg 
                  className="faq-icon" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d={openIndex === index ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"} 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
