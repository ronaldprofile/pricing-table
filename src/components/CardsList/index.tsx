import { Card } from "../Card";

export function CardList() {
  return (
    <div className="flex flex-col flex-wrap items-center gap-5 md:flex-row md:justify-center">
      <Card
        planName="Free"
        price="00"
        descriptionPlan="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        className="md:-translate-y-4"
        isPopular
        planName="Básico"
        price="29"
        descriptionPlan="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Card
        planName="Profissional"
        price="59"
        descriptionPlan="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
}
