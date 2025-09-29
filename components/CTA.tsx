import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center rounded-t-2xl">
      <h2 className="text-3xl font-bold mb-4">
        Start Managing Your Inventory Smarter — Free for 14 Days!
      </h2>
      <Button className="bg-white text-blue-600 hover:bg-gray-100">
        Get Started Now
      </Button>
    </section>
  );
};
