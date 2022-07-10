import useUser from "lib/hooks/useUser";
import Link from "next/link";
import { useCallback } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { signup } from "lib/api";
import { RegisterForm } from "lib/api";
import Input from "components/common/Input";
import Submit from "components/common/buttons/Submit";
import ErrorText from "components/common/ErrorText";
import { FetchError } from "lib/fetchJson";
import { toast } from "react-hot-toast";

const Signup = () => {
  useUser({ redirectTo: "/", redirectIfFound: true });

  const { control, handleSubmit, watch, setError } = useForm<RegisterForm>({
    defaultValues: {
      username: "",
      password: "",
      rpassword: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterForm> = useCallback(
    async (data) => {
      try {
        const res = signup(data);
        toast.promise(res, {
          loading: "Saving...",
          success: "Saved!",
          error: (error: FetchError) => {
            if ((error as FetchError).response.status === 400) {
              return "username already exists";
            } else {
              return "An error occurred.";
            }
          },
        });
        await res;
        window.location.href = "/";
      } catch (error) {
        if ((error as FetchError).response.status === 400) {
          setError("username", { message: "username already exists" });
        } else {
          throw error;
        }
      }
    },
    [setError]
  );

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 space-y-6 rounded-md bg-white px-5 py-8 drop-shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Create an account!
      </h2>
      <div className="rounded-md p-4 shadow-sm">
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
        <div className="mt-5">
          <label htmlFor="rpassword" className="sr-only">
            Re-enter Password
          </label>
          <Controller
            name="rpassword"
            control={control}
            rules={{
              required: "required",
              validate: (rpassword) =>
                rpassword !== password ? "incorrect password" : true,
            }}
            render={({
              field: { name, onBlur, onChange, value },
              fieldState: { isTouched, error },
            }) => (
              <div>
                <Input
                  id="rpassword"
                  type="password"
                  placeholder="Re-enter Password *"
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
            }}
          >
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Already have an account ?{" "}
            </a>
          </Link>
        </div>
      </div>
      <div>
        <Submit
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign up
        </Submit>
      </div>
    </form>
  );
};

export default Signup;
