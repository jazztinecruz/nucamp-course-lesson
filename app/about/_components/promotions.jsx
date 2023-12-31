"use client";

import Card from "@/components/cards";

const Promotions = ({ promotions }) => {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-center text-xl md:text-2xl font-bold">
        Our Community Promotions
      </h2>

      <ul className="grid lg:grid-cols-2 gap-4">
        {promotions.map((promotion) => (
          <Card data={promotion} key={promotion.id} />
        ))}
      </ul>
    </section>
  );
};

export default Promotions;
