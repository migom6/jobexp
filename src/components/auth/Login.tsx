import { login, LoginForm } from "lib/api";
import useUser from "lib/hooks/useUser";
import Link from "next/link";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useCallback } from "react";
import Router from "next/router";
import Input from "components/common/Input";
import ErrorText from "components/common/ErrorText";
import Submit from "components/common/buttons/Submit";

const Login = () => {
  useUser({ redirectTo: "/", redirectIfFound: true });

  const { control, handleSubmit, watch, setError } = useForm<LoginForm>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = useCallback(
    async (data) => {
      try {
        const res = await login(data);
        if (res.status === 200) {
          Router.push("/");
        } else {
          throw new Error(await res.text());
        }
      } catch (error) {
        console.error("username or password does not match");
        setError("username", {
          message: "username or password does not match",
        });
      }
    },
    [setError]
  );

  return (
    <form
      className="mt-8 space-y-6 rounded-md bg-white px-5 py-8 drop-shadow-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold text-gray-800">🙏 Welcome back!</h2>
      <div className="rounded-md shadow-sm">
        <div>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <Controller
            name="username"
            control={control}
            rules={{ required: "required" }}
            render={({
              field: { name, onBlur, onChange, value },
              fieldState: { isTouched, error },
            }) => (
              <div>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username *"
                  value={value}
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                />
                {error && <ErrorText>{error.message}</ErrorText>}
              </div>
            )}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            rules={{ required: "required" }}
            render={({
              field: { name, onBlur, onChange, value },
              fieldState: { isTouched, error },
            }) => (
              <div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password *"
                  value={value}
                  name={name}
                  onBlur={onBlur}
                  onChange={onChange}
                />
                {error && <ErrorText>{error.message}</ErrorText>}
              </div>
            )}
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
        <Submit
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in
        </Submit>
      </div>
    </form>
  );
};

export default Login;
