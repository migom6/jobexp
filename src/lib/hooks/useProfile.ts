import useSWR from "swr";
import { Profile } from "lib/types";
import { useRouter } from "next/router";

// if logged in no need to send username otherwise send username
export default function useProfile() {
  const router = useRouter();
  const {
    query: { username },
  } = router;

  const {
    data: profile,
    mutate: mutateProfile,
    error,
  } = useSWR<Profile>(
    username ? `/api/profile?username=${username}` : "/api/profile"
  );

  return { profile, mutateProfile, error };
}
