import Layout from "components/common/Layout";
import Personal from "components/personal";

export default function Home() {
  return (
    <>
      <header className="relative flex flex-col items-center border-b bg-slate-50">
        <div className="h-[200px] w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200" />
        <div className="relative -top-12 flex flex-col items-center">
          <div className="h-[120px] w-[120px] overflow-hidden rounded-full border-4 border-white bg-red-500 drop-shadow-md" />
          {/*<Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="profile picture"
              className=" h-[50px] w-[50px] rounded-full"
              width={50}
              layout="fill"
            />
          </div> */}

          <h1 className="my-5 text-2xl font-semibold">Abhilash Sharma</h1>
          <div className="flex gap-5">
            <button>View</button>
            <button>Share</button>
          </div>
        </div>
      </header>
      <Layout>
        <div className="flex w-full max-w-7xl flex-wrap-reverse justify-between gap-5 lg:flex-nowrap">
          <div className="flex w-full flex-col gap-5 text-slate-900">
            <section>
              <h2 className="text-xl font-semibold capitalize">About me</h2>
              <p className="mt-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laborum error, aliquam, culpa veniam dolorum placeat ab eum eos
                qui dolores doloremque recusandae velit eveniet laudantium.
                Iusto fuga tempora maxime.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold capitalize">
                Work Experiences
              </h2>
              <p className="mt-2 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                laborum error, aliquam, culpa veniam dolorum placeat ab eum eos
                qui dolores doloremque recusandae velit eveniet laudantium.
                Iusto fuga tempora maxime.
              </p>
            </section>
          </div>
          <Personal />
        </div>
      </Layout>
    </>
  );
}
