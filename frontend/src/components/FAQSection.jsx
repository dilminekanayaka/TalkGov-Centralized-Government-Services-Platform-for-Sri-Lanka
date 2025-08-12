import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const faqs = [
  {
    question: "How do I apply for a government ID?",
    answer:
      "To apply for a government ID, you need to visit your local government office with required documents such as proof of address, birth certificate, and a completed application form. You can download the application form from our website and find the list of required documents in the 'Services' section.",
  },
  {
    question: "What services can I access through TalkGov?",
    answer:
      "TalkGov provides guidance on a wide range of government services including ID applications, tax filing assistance, business permits, social services applications, healthcare program enrollment, and more. Our platform is designed to simplify the process of accessing these services.",
  },
  {
    question: "How long does it take to process my application?",
    answer:
      "Processing times vary depending on the type of service. Most applications are processed within 5-10 business days, but some specialized services may take up to 30 days. You can check the status of your application through your TalkGov account dashboard.",
  },
  {
    question:
      "Can I schedule an appointment with a government office through TalkGov?",
    answer:
      "Yes, TalkGov offers appointment scheduling for many government offices. Simply navigate to the 'Schedule Appointment' section, select the relevant department, choose your preferred date and time, and confirm your booking. You'll receive a confirmation email with your appointment details.",
  },
  {
    question: "What should I do if I made a mistake on my application?",
    answer:
      "If you've made a mistake on your application before submission, you can simply edit your form. If you've already submitted the application, please contact our support team immediately with your application reference number, and we'll guide you through the correction process.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left px-4 py-3 bg-gray-50 flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon size={20} className="text-blue-600" />
              ) : (
                <ChevronDownIcon size={20} className="text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
