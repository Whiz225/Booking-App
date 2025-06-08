// import supabase from "./supabase";
import axios from "./axios";

export async function login({ email, password }) {
  const res = await axios.post("/users/login", { email, password });

  if (res.data.status !== "success")
    throw new Error("Provided email or passWord is incorrect!");

  const { user } = res.data.data;
  return user;
}

export async function signup({ fullName, email, password, passwordConfirm }) {
  const res = await axios.post("/users/signup", {
    fullName,
    email,
    password,
    passwordConfirm,
  });

  const { user } = res.data.data;
  return user;
}

export async function updateCurrentUser({ email, fullName, avatar }) {
  const res = await axios.patch("/users/updateMyData", {
    email,
    fullName,
    avatar,
  });
  const { user } = res.data.data;
  // return user;
  return user;
}

export async function updateCurrentUserPassword({
  password,
  newPassword,
  newPasswordConfirm,
}) {
  const res = await axios.patch("/users/updatepassword", {
    password,
    newPassword,
    newPasswordConfirm,
  });
  const { user } = res.data.data;
  return user;
}

export async function getCurrentUser() {
  // console.log(email, password);
  const res = await axios.get("/users/me");

  if (res.data.status !== "success")
    throw new Error("Provided email or passWord is incorrect!");
  const { data } = res.data.data;
  return data;
}

export async function logout() {
  const res = await axios.get("/users/logout");

  return null;
}
