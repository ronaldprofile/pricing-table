import Head from "next/head";
import { CardList } from "../components/CardsList";

function Home() {
  return (
    <div className="w-full h-[450px] bg-pricingTable-blue">
      <Head>
        <title>Pricing Table</title>
        <meta
          name="description"
          content="Conheça nossas soluções e escolha o plano ideal para o seu
            próximo projeto."
        />
      </Head>

      <main>
        <div className="pt-[100px] pb-[65px] font-sans text-center text-white">
          <h1 className="text-3xl font-bold md:text-5xl">
            Conheça nossos planos
          </h1>
          <p className="text-[18px] mt-5 font-normal opacity-70">
            conheça nossas soluções e escolha o plano ideal para o seu <br />
            próximo projeto.
          </p>
        </div>

        <CardList />
      </main>
    </div>
  );
}

export default Home;
