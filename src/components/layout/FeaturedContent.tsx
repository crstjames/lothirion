// Define featured content items
const featuredItems = [
  {
    id: 1,
    type: "RESEARCH REPORT",
    title: "Empowering loyalty: How AI can transform CSPs' B2C growth",
    image: "https://placehold.co/800x600/222222/444444?text=AI+Loyalty",
    link: "/insights/ai-loyalty",
    description: "How top performers consistently deliver on their infrastructure and capital projects' commitments.",
  },
  {
    id: 2,
    type: "CASE STUDY",
    title: "AI personalities, real connection",
    image: "https://placehold.co/800x600/222222/444444?text=AI+Personalities",
    link: "/insights/ai-personalities",
    description: "Creating personalized AI experiences that connect with customers.",
  },
  {
    id: 3,
    type: "RESEARCH REPORT",
    title: "Blueprint for success",
    image: "https://placehold.co/800x600/222222/444444?text=Blueprint+for+Success",
    link: "/insights/blueprint-success",
    description: "How top performers consistently deliver on their infrastructure and capital projects' commitments.",
  },
  {
    id: 4,
    type: "CASE STUDY",
    title: "Uber hails a new era for advertising",
    image: "https://placehold.co/800x600/222222/444444?text=Uber+Advertising",
    link: "/insights/uber-advertising",
    description: "Revolutionizing the advertising space with innovative customer experiences.",
  },
  {
    id: 5,
    type: "CASE STUDY",
    title: "Vodafone pioneers commercialized shared services operations",
    image: "https://placehold.co/600x400/222222/999999/png?text=Vodafone+Services",
    link: "/insights/vodafone-services",
  },
  {
    id: 6,
    type: "PERSPECTIVE",
    title: "What's keeping software and platform leaders up at night?",
    image: "https://placehold.co/600x400/222222/999999/png?text=Software+Leaders",
    link: "/insights/software-leaders",
  },
  {
    id: 7,
    type: "RESEARCH REPORT",
    title: "Making reinvention real with gen AI: From experimentation to innovation",
    image: "https://placehold.co/600x400/222222/999999/png?text=Real+GenAI",
    link: "/insights/real-genai",
  },
  {
    id: 8,
    type: "BLOG",
    title: "What we learned designing a new agentic workforce in Marketing",
    image: "https://placehold.co/600x400/222222/999999/png?text=Agentic+Workforce",
    link: "/insights/agentic-workforce",
  },
];

export function FeaturedContent() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div key={item.id} className="group relative">
              <div className="relative overflow-hidden mb-4">
                <a href={item.link} className="block">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-gray-400 mb-2 inline-block">{item.type}</span>
                <h3 className="text-xl font-medium mb-3">
                  <a href={item.link} className="hover:text-sky-600 transition-colors">
                    {item.title}
                  </a>
                </h3>

                {item.description && <p className="text-gray-400 text-sm mb-4">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
