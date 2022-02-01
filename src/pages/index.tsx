import Head from "next/head";
import { Card } from "../components/Card";

function Home() {
  return (
    <div className="w-full h-[450px] bg-pricingTable-blue">
      <Head>
        <title>Pricing Table</title>
      </Head>
      <div className="pt-[100px] pb-[65px] font-sans text-center text-white">
        <h1 className="text-3xl font-bold md:text-5xl">
          Conheça nossos planos
        </h1>
        <p className="text-[18px] mt-5 font-normal opacity-70">
          conheça nossas soluções e escolha o plano ideal para o seu <br />{" "}
          próximo projeto.
        </p>
      </div>

      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-center">
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
    </div>
  );
}

export default Home;
