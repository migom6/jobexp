import useSWR from "swr";
import { useRouter } from "next/router";
import { Profile } from "lib/types";

export default function useAbout() {
  const router = useRouter();
  const {
    query: { username },
  } = router;

  const {
    data: aboutData,
    mutate: mutateAboutData,
    error,
  } = useSWR<Profile["aboutData"]>(
    username ? `/api/profile/about?username=${username}` : "/api/profile/about"
  );

  return { aboutData, mutateAboutData, error };
}
