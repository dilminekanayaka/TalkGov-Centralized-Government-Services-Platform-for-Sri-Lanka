import React from "react";
import ContactForm from "../components/ContactForm";
import FAQSection from "../components/FAQSection";
import FeedbackForm from "../components/FeedbackForm";
import { PhoneIcon, MessageSquareIcon } from "lucide-react";
const Contact = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Contact TalkGov Support
            </h1>
            <p className="text-lg text-gray-600">
              We're here to help you navigate government services with ease.
              Reach out to us through any of the channels below.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 bg-blue-100 rounded-full">
                  <PhoneIcon className="text-blue-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Phone Support
                  </h3>
                  <p className="text-gray-600">Available Mon-Fri, 9am-5pm</p>
                </div>
              </div>
              <p className="mb-2 text-lg font-medium text-blue-700">
                +94 775 698 134
              </p>
              <p className="mb-4 text-gray-600">
                Our support representatives are ready to assist you with any
                questions about government services.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="p-3 mr-4 bg-green-100 rounded-full">
                  <MessageSquareIcon className="text-green-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    SMS Support
                  </h3>
                  <p className="text-gray-600">Quick assistance via text</p>
                </div>
              </div>
              <p className="mb-2 text-lg font-medium text-green-700">
                Text "HELP" to 33789
              </p>
              <p className="mb-4 text-gray-600">
                For quick questions and status updates, text us and receive a
                response within minutes.
              </p>
            </div>
          </div>
          <div className="mb-12">
            <ContactForm />
          </div>
          <div className="mb-12">
            <FAQSection />
          </div>
          <div>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
