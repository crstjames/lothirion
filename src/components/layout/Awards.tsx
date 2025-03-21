import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const awards = [
  {
    id: 1,
    title: "A Great Place To Work",
    subtitle: "No. 6 on the World's Best Workplaces™ list.",
    description:
      "This recognition is based on feedback from our people—measuring their level of trust, pride and camaraderie at work.",
    link: "/about/awards/workplace",
  },
  {
    id: 2,
    title: "The Top Consulting Firm",
    subtitle: "Earned the top spot among the World's Best Management Consulting Firms.",
    description:
      "Forbes recognized CHRYS AI as the management consulting firm most recommended by consultants and clients, across industries and functional areas, around the world.",
    link: "/about/awards/consulting",
  },
  {
    id: 3,
    title: "An Influential Innovator",
    subtitle: "Our CEO is one of the TIME100 Most Influential People of 2024.",
    description:
      "Every day, our leadership and all of us at CHRYS AI help the world's leading companies embrace continuous reinvention, with innovation and people at the center.",
    link: "/about/awards/innovation",
  },
];

export function Awards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Global recognition and awards</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award) => (
            <Card
              key={award.id}
              className={`cursor-pointer transition-all duration-300 h-full ${
                activeCard === award.id ? "shadow-lg border-purple-300" : "hover:shadow-md"
              }`}
              onClick={() => setActiveCard(activeCard === award.id ? null : award.id)}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-purple-700">{award.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-gray-800 mt-2">{award.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                {activeCard === award.id && (
                  <div className="animate-fade-in">
                    <p className="text-gray-600 mb-4">{award.description}</p>
                    <a
                      href={award.link}
                      className="text-purple-700 font-medium hover:underline inline-flex items-center"
                    >
                      See related awards
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
