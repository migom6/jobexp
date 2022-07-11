import Layout from "components/common/Layout";
import Personal from "components/personal";
import Hero from "components/hero";
import Experiences from "components/experiences";
import About from "components/about";
import Head from "next/head";
import SuspenseNoSSR from "components/common/SuspenseNoSSR";
import HeroSkeleton from "components/hero/HeroSkeleton";
import ExperiencesSkeleton from "components/experiences/ExperiencesSkeleton";
import AboutSkeleton from "components/about/AboutSkeleton";
import PersonalSkeleton from "components/personal/PersonalSkeleton";

export default function Home() {
  return (
    <>
      <Head>
        <title>JobXP | Portfolio</title>
      </Head>
      <Layout>
        <SuspenseNoSSR fallback={<HeroSkeleton />}>
          <Hero hasControls={false} />
        </SuspenseNoSSR>
        <div className="flex w-full max-w-7xl flex-wrap-reverse justify-between gap-5 py-12 px-4 sm:px-6 md:flex-nowrap lg:px-8">
          <div className="flex w-full flex-col gap-5 text-slate-900 md:max-w-lg">
            <SuspenseNoSSR fallback={<AboutSkeleton />}>
              <About hasControls={false} />
            </SuspenseNoSSR>
            <SuspenseNoSSR fallback={<ExperiencesSkeleton />}>
              <Experiences hasControls={false} />
            </SuspenseNoSSR>
          </div>
          <SuspenseNoSSR fallback={<PersonalSkeleton />}>
            <Personal hasControls={false} />
          </SuspenseNoSSR>
        </div>
      </Layout>
    </>
  );
}
