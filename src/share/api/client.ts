import ky from "ky";
import { API_URL } from "@env";

export const client = ky.extend({
  headers: {
    Accept: "application/json",
  },
  prefixUrl: API_URL,
});
