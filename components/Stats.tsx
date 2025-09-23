export const Stats = () => {
  const stats = [
    { number: "10k+", label: "Businesses" },
    { number: "500k+", label: "Products Managed" },
    { number: "99.9%", label: "Uptime" },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto grid md:grid-cols-3 text-center gap-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
