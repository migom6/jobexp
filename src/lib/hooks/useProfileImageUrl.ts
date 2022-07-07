import useSWR from "swr";
import { useRouter } from "next/router";
import { Profile } from "lib/types";

export default function useProfileImageUrl() {
  const router = useRouter();
  const {
    query: { username },
  } = router;

  const {
    data: profileImageUrl,
    mutate: mutateProfileImageUrl,
    error,
  } = useSWR<{ profileImageUrl: Profile["profileImageUrl"] }>(
    username
      ? `/api/profile/profileImageUrl?username=${username}`
      : "/api/profile/profileImageUrl"
  );

  return { profileImageUrl, mutateProfileImageUrl, error };
}
