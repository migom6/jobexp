import Layout from "components/common/Layout";
import Personal from "components/personal";
import Hero from "components/hero";
import Experiences from "components/experiences";
import About from "components/about";

export default function Home() {
  return (
    <>
      <Hero />
      <Layout>
        <div className="flex w-full max-w-7xl flex-wrap-reverse justify-between gap-5 lg:flex-nowrap">
          <div className="flex w-full flex-col gap-5 text-slate-900">
            <About />
            <Experiences />
          </div>
          <Personal />
        </div>
      </Layout>
    </>
  );
}
