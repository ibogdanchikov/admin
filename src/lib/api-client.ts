import ky from "ky";
import { env } from "@/config/env.ts";

export const api = ky.create({
  prefixUrl: env.API_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        const token = localStorage.getItem("token");
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});
