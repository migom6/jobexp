import useSWR from "swr";
import { useRouter } from "next/router";
import { PartialBy, Profile } from "lib/types";

export default function useAbout() {
  const router = useRouter();
  const {
    query: { username },
  } = router;

  const {
    data: aboutData,
    mutate: mutateAboutData,
    error,
  } = useSWR<PartialBy<Profile["aboutData"], "about">>(
    username ? `/api/profile/about?username=${username}` : "/api/profile/about"
  );

  return { aboutData, mutateAboutData, error };
}
