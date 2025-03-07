import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML." },
  { question: "What are components in React?", answer: "Components are reusable UI elements in React that can be class-based or functional." },
  { question: "What is state in React?", answer: "State is a built-in object in React components that holds data that may change over time." },
  { question: "What are props in React?", answer: "Props (short for properties) are used to pass data from parent to child components in React." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-screen h-[100vh] bg-teal-950 p-5 flex flex-col items-center ">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Frequently Asked Questions</h2>
      <div className="space-y-4 w-full md:w-1/2 flex flex-col items-center justify-center">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full border rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left font-semibold bg-white hover:bg-gray-200 hover:text-black"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 border-t">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;