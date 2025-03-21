import { Button } from "@/components/ui/button";

export function ValueSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-7xl md:text-8xl font-bold mb-10">360° VALUE</h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl">
            Every day, we embrace change and create value for all our stakeholders around the world.
          </p>
        </div>

        <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors uppercase px-8">
          See the report <span className="ml-2">→</span>
        </Button>
      </div>
    </section>
  );
}
