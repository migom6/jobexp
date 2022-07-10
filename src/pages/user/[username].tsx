import Layout from "components/common/Layout";
import Personal from "components/personal";
import Hero from "components/hero";
import Experiences from "components/experiences";
import About from "components/about";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>JobXP | Portfolio</title>
      </Head>
      <Layout>
        <Hero hasControls={false} />
        <div className="flex w-full max-w-7xl flex-wrap-reverse justify-between gap-5 py-12 px-4 sm:px-6 md:flex-nowrap lg:px-8">
          <div className="flex w-full flex-col gap-5 text-slate-900 md:max-w-lg">
            <About hasControls={false} />
            <Experiences hasControls={false} />
          </div>
          <Personal hasControls={false} />
        </div>
      </Layout>
    </>
  );
}
