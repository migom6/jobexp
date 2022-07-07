import Layout from "components/common/Layout";
import Personal from "components/personal";
import Hero from "components/hero";
import Experiences from "components/experiences";
import About from "components/about";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero hasControls={false} />
        <div className="flex w-full max-w-7xl flex-wrap-reverse justify-between gap-5 py-12 px-4 sm:px-6 lg:flex-nowrap lg:px-8">
          <div className="flex flex-col gap-5 text-slate-900">
            <About hasControls={false} />
            <Experiences hasControls={false} />
          </div>
          <Personal hasControls={false} />
        </div>
      </Layout>
    </>
  );
}
