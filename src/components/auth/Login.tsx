import Link from "next/link";

const Login = () => {
  return (
    <form
      className="mt-8 space-y-6 rounded-md bg-white px-5 py-8 drop-shadow-sm"
      action="#"
      method="POST"
    >
      <h2 className="text-2xl font-semibold text-gray-800">🙏 Welcome back!</h2>
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Username"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-sm">
          <Link
            href={{
              pathname: "/login",
              query: { new: "true" },
            }}
          >
            <a className="font-medium text-indigo-600 hover:text-indigo-500">
              {" "}
              Don&apos;t have an account ?{" "}
            </a>
          </Link>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Login;
