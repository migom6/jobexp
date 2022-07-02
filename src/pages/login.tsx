import { Login, Signup } from "components/auth";
import Layout from "components/common/Layout";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const showSignup = query.new === "true";

  return (
    <Layout>
      <div className="mx-auto w-full max-w-md space-y-8 self-center">
        {!showSignup ? <Login /> : <Signup />}
      </div>
    </Layout>
  );
};

export default Index;
