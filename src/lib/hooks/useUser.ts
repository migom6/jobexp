import { useEffect } from "react";
import useSWR from "swr";
import { User } from "lib/types";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser } = useSWR<User>("/api/auth/me");

  useEffect(() => {
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      window.location.href = redirectTo;
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
