import React, { useState } from "react";
import { MessageSquareIcon } from "lucide-react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback data to your backend
    console.log("Feedback submitted:", {
      rating,
      feedback,
    });
    setIsSubmitted(true);
    // Reset form after submission
    setFeedback("");
    setRating(null);
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 p-3 rounded-full mr-4">
          <MessageSquareIcon className="text-purple-700" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Submit Feedback</h2>
      </div>

      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md mb-6">
          Thank you for your feedback! We value your input and will use it to
          improve our services.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How would you rate your experience with our services?
          </label>
          <div className="flex space-x-2 mb-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none ${
                  rating === value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            {rating
              ? `You selected: ${rating} star${rating !== 1 ? "s" : ""}`
              : "Please select a rating"}
          </p>
        </div>

        <div className="mb-6">
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
            placeholder="Tell us about your experience or suggestions for improvement..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={!rating}
          className={`w-full font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
            rating
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
