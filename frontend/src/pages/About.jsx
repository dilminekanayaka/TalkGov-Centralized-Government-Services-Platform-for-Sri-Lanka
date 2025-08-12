import React from "react";
import { CheckCircleIcon, FileTextIcon } from "lucide-react";
const About = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About TalkGov
            </h1>
            <p className="text-lg text-gray-600">
              Simplifying government services and empowering citizens through
              accessible information
            </p>
          </div>
          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              At TalkGov, our mission is to bridge the gap between citizens and
              government services. We understand that navigating government
              processes can be complex and time-consuming, which is why we've
              created a platform that simplifies these interactions.
            </p>
            <p className="text-gray-700 mb-6">
              We believe that every citizen deserves easy access to the services
              they need. By providing clear guidance, streamlined processes, and
              dedicated support, we're making government services more
              accessible to everyone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <CheckCircleIcon
                  className="text-green-600 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Accessibility
                  </h3>
                  <p className="text-gray-600">
                    Making government services accessible to all citizens
                    regardless of technical ability
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon
                  className="text-green-600 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Simplification
                  </h3>
                  <p className="text-gray-600">
                    Breaking down complex processes into simple, understandable
                    steps
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon
                  className="text-green-600 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Support</h3>
                  <p className="text-gray-600">
                    Providing dedicated assistance when you need help navigating
                    services
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircleIcon
                  className="text-green-600 mr-3 mt-1"
                  size={20}
                />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Efficiency
                  </h3>
                  <p className="text-gray-600">
                    Reducing wait times and streamlining application processes
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* How We Help Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              How We Help
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Service Navigation
                </h3>
                <p className="text-gray-700">
                  We provide clear, step-by-step guidance on how to access
                  various government services, from obtaining IDs to applying
                  for benefits.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Document Preparation
                </h3>
                <p className="text-gray-700">
                  We help you understand what documents you need for different
                  services and how to properly prepare them to avoid delays.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">
                  Support Channels
                </h3>
                <p className="text-gray-700">
                  Our multi-channel support system ensures you can get help
                  through phone, email, or SMS, whichever is most convenient for
                  you.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">
                  Educational Resources
                </h3>
                <p className="text-gray-700">
                  We provide informational resources to help you better
                  understand government services and make informed decisions.
                </p>
              </div>
            </div>
          </div>
          {/* Terms of Service */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <FileTextIcon className="text-blue-700 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Terms of Service
              </h2>
            </div>
            <div className="prose max-w-none text-gray-700">
              <p>
                Welcome to TalkGov. By accessing our website and services, you
                agree to be bound by the following terms and conditions:
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                1. Service Usage
              </h3>
              <p>
                TalkGov provides information and guidance on government
                services. We are not a government entity and do not directly
                provide government services. Our role is to facilitate access to
                these services through information and support.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                2. User Responsibilities
              </h3>
              <p>
                Users are responsible for the accuracy of information provided
                when using our platform. TalkGov is not responsible for delays
                or issues arising from inaccurate information provided by users.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                3. Privacy Policy
              </h3>
              <p>
                We respect your privacy and protect your personal information.
                Please review our Privacy Policy for details on how we collect,
                use, and protect your data.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                4. Limitation of Liability
              </h3>
              <p>
                TalkGov strives to provide accurate and up-to-date information,
                but we cannot guarantee the accuracy of all content. We are not
                liable for any damages arising from the use of our services.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">
                5. Changes to Terms
              </h3>
              <p>
                We may update these terms of service from time to time.
                Continued use of our services after such changes constitutes
                acceptance of the new terms.
              </p>
              <p className="mt-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
