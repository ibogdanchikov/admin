import z from "zod";
import { api } from "@/lib/api-client.ts";

export type Token = {
  token: string;
};

export type UserPermission = {
  code: string;
  name: string;
};

export type User = {
  login: string;
  firstName: string;
  lastName: string;
  permissions: UserPermission[];
};

export const loginInputSchema = z.object({});

export const login = async (username: string, password: string) => {
  const credentials = btoa(`${username}:${password}`);
  return api
    .post<Token>("users/login", {
      headers: { Authorization: `Basic ${credentials}` },
    })
    .json();
};

export const logout = () => localStorage.removeItem("token");

export async function fetchMe() {
  return api.get<User>("users/me").json();
}
