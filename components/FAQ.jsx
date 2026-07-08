'use client';

import { useState } from 'react';
import Tr from './Tr';

const faqData = [
  { questionKey: 'faq:q1', answerKey: 'faq:a1', hasLink: true },
  { questionKey: 'faq:q2', answerKey: 'faq:a2' },
  { questionKey: 'faq:q3', answerKey: 'faq:a3' },
  { questionKey: 'faq:q4', answerKey: 'faq:a4' },
  { questionKey: 'faq:q5', answerKey: 'faq:a5' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-heading"><Tr id="faq:heading" /></h2>
        <p className="faq-subheading">
          <Tr id="faq:subheading" />
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
                <span><Tr id={item.questionKey} /></span>
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
                {item.hasLink ? (
                  <p>
                    <Tr id="faq:a1-part1" />{' '}
                    <a href="https://proax.ca/en/services/robot-maintenance-services" target="_blank" rel="noopener noreferrer" className="faq-link">
                      <Tr id="faq:a1-link" />
                    </a>{' '}
                    <Tr id="faq:a1-part2" />
                  </p>
                ) : (
                  <p><Tr id={item.answerKey} /></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
