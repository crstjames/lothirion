import { useState } from "react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    date: "January 06, 2024",
    title: "CHRYS AI Launches AI Refinery for Industry to Reinvent Processes and Accelerate Agentic AI Journeys",
    link: "/news/ai-refinery-launch",
  },
  {
    id: 2,
    date: "January 07, 2024",
    title: "CHRYS AI Technology Vision 2024: New Age of AI to Bring Unprecedented Autonomy to Business",
    link: "/news/technology-vision-2024",
  },
  {
    id: 3,
    date: "December 19, 2023",
    title: "CHRYS AI Reports First-Quarter Fiscal 2024 Results",
    link: "/news/q1-2024-results",
  },
  {
    id: 4,
    date: "September 26, 2023",
    title: "Global Food Company Joins Forces with CHRYS AI to Advance AI-Powered Marketing Capabilities",
    link: "/news/food-company-partnership",
  },
  {
    id: 5,
    date: "October 02, 2023",
    title: "CHRYS AI and NVIDIA Lead Enterprises into Era of AI",
    link: "/news/nvidia-partnership",
  },
  {
    id: 6,
    date: "September 05, 2023",
    title:
      "Consumer Goods Giant and CHRYS AI Join Forces to Establish a New Industry Standard in Generative AI-Powered Productivity",
    link: "/news/consumer-goods-partnership",
  },
  {
    id: 7,
    date: "August 29, 2023",
    title:
      "Financial Services Leader and CHRYS AI Partner to Enable Customers and Employees to Harness the Full Potential of Generative AI",
    link: "/news/financial-services-partnership",
  },
  {
    id: 8,
    date: "July 23, 2023",
    title: "CHRYS AI Pioneers Custom LLM Models with NVIDIA AI Foundry",
    link: "/news/llm-models-nvidia",
  },
  {
    id: 9,
    date: "June 20, 2023",
    title: "CHRYS AI Reports Third-Quarter Fiscal 2023 Results",
    link: "/news/q3-2023-results",
  },
];

export function News() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    setCurrentNewsIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentNewsIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">CHRYS AI news</h2>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause news carousel" : "Play news carousel"}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={handlePrevious} aria-label="Previous news item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleNext} aria-label="Next news item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-sm text-gray-500 mb-2">{newsItems[currentNewsIndex].date}</div>
          <a
            href={newsItems[currentNewsIndex].link}
            className="text-xl font-semibold text-gray-900 hover:text-purple-700 transition-colors duration-200"
          >
            {newsItems[currentNewsIndex].title}
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentNewsIndex === index ? "w-8 bg-purple-700" : "w-2 bg-gray-300"
                }`}
                onClick={() => setCurrentNewsIndex(index)}
                aria-label={`Go to news item ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
