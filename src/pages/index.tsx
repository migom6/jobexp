import Layout from "components/common/Layout";
import Personal from "components/personal";
import Hero from "components/hero";
import Experiences from "components/experiences";
import About from "components/about";
import useUser from "lib/hooks/useUser";
import Head from "next/head";
import SuspenseNoSSR from "components/common/SuspenseNoSSR";
import AboutSkeleton from "components/about/AboutSkeleton";
import ExperiencesSkeleton from "components/experiences/ExperiencesSkeleton";
import PersonalSkeleton from "components/personal/PersonalSkeleton";
import HeroSkeleton from "components/hero/HeroSkeleton";

export default function Home() {
  useUser();
  return (
    <>
      <Head>
        <title>JobXP | Edit Profile</title>
      </Head>
      <Layout>
        <SuspenseNoSSR fallback={<HeroSkeleton />}>
          <Hero />
        </SuspenseNoSSR>
        <div className="flex w-full max-w-7xl flex-wrap-reverse justify-between gap-5 py-12 px-4 sm:px-6 md:flex-nowrap lg:px-8">
          <div className="flex w-full flex-col gap-5 text-slate-900 md:max-w-lg">
            <SuspenseNoSSR fallback={<AboutSkeleton />}>
              <About />
            </SuspenseNoSSR>
            <SuspenseNoSSR fallback={<ExperiencesSkeleton />}>
              <Experiences />
            </SuspenseNoSSR>
          </div>
          <SuspenseNoSSR fallback={<PersonalSkeleton />}>
            <Personal />
          </SuspenseNoSSR>
        </div>
      </Layout>
    </>
  );
}
