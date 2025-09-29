import { Card, CardContent } from "@/components/ui/card";
import { PackageIcon, FileTextIcon, BarChartIcon } from "lucide-react";

const features = [
  {
    icon: <PackageIcon className="w-8 h-8 text-blue-600" />,
    title: "Inventory Tracking",
    description: "Real-time stock updates to keep you on track.",
  },
  {
    icon: <FileTextIcon className="w-8 h-8 text-blue-600" />,
    title: "Invoice Management",
    description: "Generate and send invoices effortlessly.",
  },
  {
    icon: <BarChartIcon className="w-8 h-8 text-blue-600" />,
    title: "Analytics Dashboard",
    description: "Monitor sales trends and performance reports.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-lg border rounded-2xl">
              <CardContent className="flex flex-col items-center p-6">
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
