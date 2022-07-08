import Layout from "components/common/Layout";
import Personal from "components/personal";
import Hero from "components/hero";
import Experiences from "components/experiences";
import About from "components/about";
import SuspenseNoSSR from "components/common/SuspenseNoSSR";
import ExperiencesSkeleton from "components/experiences/ExperiencesSkeleton";
import AboutSkeleton from "components/about/AboutSuspense";
import HeroSkeleton from "components/hero/HeroSkeleton";
import PersonalSkeleton from "components/personal/PersonalSkeleton";
export default function Home() {
  return (
    <>
      <Layout>
        <SuspenseNoSSR fallback={<HeroSkeleton />}>
          <Hero hasControls={false} />
        </SuspenseNoSSR>
        <div className="flex w-full max-w-7xl flex-wrap-reverse justify-between gap-5 py-12 px-4 sm:px-6 md:flex-nowrap lg:px-8">
          <div className="flex flex-col gap-5 text-slate-900">
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
