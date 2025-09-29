import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simplify Your <span className="text-blue-600">Inventory</span> &
            Sales Management
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
            Track stock, manage sales, and run your business smarter — all from
            one dashboard.
          </p>
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
            <Button variant="outline">Watch Demo</Button>
          </div>
        </div>

        {/* Right Dashboard Preview */}
        <div className="flex-1">
          <Image
            src="/bizstock-background.png"
            alt="Dashboard Preview"
            width={600}
            height={400}
            className="rounded-xl shadow-xl border"
          />
        </div>
      </div>
    </section>
  );
};
