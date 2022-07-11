import useSWR from "swr";
import { Profile } from "lib/types";

export default function useProfile() {
  const { data: profiles, error } = useSWR<Partial<Profile>[]>("/api/users");

  return { profiles, error };
}
