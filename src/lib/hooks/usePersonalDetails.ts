import useSWR from "swr";
import { useRouter } from "next/router";
import { Profile } from "lib/types";

export default function usePersonalDetails() {
  const router = useRouter();
  const {
    query: { username },
  } = router;

  const {
    data: personalDetailsData,
    mutate: mutatePersonalDetailsData,
    error,
  } = useSWR<Profile["personalDetailsData"]>(
    username
      ? `/api/profile/personalDetails?username=${username}`
      : "/api/profile/personalDetails"
  );

  return { personalDetailsData, mutatePersonalDetailsData, error };
}
