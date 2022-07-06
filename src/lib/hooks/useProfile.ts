import useSWR from "swr";
import { Profile } from "lib/types";

// if logged in no need to send username otherwise send username
export default function useProfile({ username }: { username?: string }) {
  const {
    data: profile,
    mutate: mutateProfile,
    error,
  } = useSWR<Profile>(
    username ? `/api/profile?username=${username}` : "/api/profile"
  );

  return { profile, mutateProfile, error };
}
