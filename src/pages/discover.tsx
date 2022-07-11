import Layout from "components/common/Layout";
import Head from "next/head";
import Discover from "components/dicover";
import SuspenseNoSSR from "components/common/SuspenseNoSSR";
import DiscoverSkeleton from "components/dicover/DiscoverSkeleton";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>JobXP | Discover</title>
      </Head>
      <Layout>
        <div className="flex w-full max-w-7xl flex-col gap-5 py-12 px-4 text-neutral-800 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-16 mb-5 text-2xl font-bold"
          >
            Check out the most recent profiles
          </motion.h1>
          <SuspenseNoSSR fallback={<DiscoverSkeleton />}>
            <Discover />
          </SuspenseNoSSR>
        </div>
      </Layout>
    </>
  );
}
