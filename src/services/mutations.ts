

import axiosInstance from "@/lib/axios-instance";
import { RegisterMutation, LoginMutation } from "@/types/mutations-types";


export async function Login(payload: LoginMutation) {
  const response = await axiosInstance.post("/login", payload, {
  });
  return response.data;
}


export async function Register(payload: RegisterMutation) {
  const response = await axiosInstance.post("/register", payload, {});
  return response.data;
}




export async function Logout() {
  const response = await axiosInstance.post("/logout", {});
  return response.data;
}

