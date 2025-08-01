import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { client } from "@/share/api";
import { getItem, setItem } from "@/share/lib/storage";
import type { User } from "@/share/types";

const PROFILE = "profile";
export function useProfile() {
  const [user, setUser] = useState<User | null>(null);
  const { data, refetch, isFetching } = useQuery({
    queryKey: [PROFILE],
    queryFn: () => client.get("/posts").json<{ data: User }>(),
  });

  const loadInitialUser = () => {
    try {
      const cachedUser = getItem<User>(PROFILE);
      if (cachedUser) {
        setUser(cachedUser);
      }
    } catch (err) {
      console.error("Failed to load user from MMKV:", err);
    }
  };

  useEffect(() => {
    loadInitialUser(); // Load cached user immediately
  }, []);

  useEffect(() => {
    if (data?.data) {
      setUser(data?.data);
      setItem(PROFILE, data?.data);
    }
  }, [data]);

  return { user, setUser, refetch, isFetching };
}
