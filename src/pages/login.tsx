import { Login, Signup } from "components/auth";
import Layout from "components/common/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const showSignup = query.new === "true";

  return (
    <Layout hideHeader>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="rounded-mdpx-5 mt-12 flex items-center justify-center gap-2 py-2"
      >
        <Image src="/logo.svg" alt="logo" height={60} width={60} />
        <h1 className="rounded px-2 pb-1 text-2xl font-bold text-neutral-700">
          Job Experiences
        </h1>
      </motion.div>
      <div className="mx-auto w-full max-w-md space-y-8 self-center px-3">
        {!showSignup ? <Login /> : <Signup />}
      </div>
    </Layout>
  );
};

export default Index;
