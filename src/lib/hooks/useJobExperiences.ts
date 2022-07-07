import useSWR from "swr";
import { useRouter } from "next/router";
import { Profile } from "lib/types";

export default function useJobExperiences() {
  const router = useRouter();
  const {
    query: { username },
  } = router;

  const {
    data: jobExperiencesData,
    mutate: mutateJobExperiencesData,
    error,
  } = useSWR<Profile["jobExperiencesData"]>(
    username
      ? `/api/profile/jobExperiences?username=${username}`
      : "/api/profile/jobExperiences"
  );

  return { jobExperiencesData, mutateJobExperiencesData, error };
}
