// import supabase from "./supabase";
import axios from "./axios";

export async function login({ email, password }) {
  console.log(email, password);
  const res = await axios.post("/users/login", { email, password });

  if (res.data.status !== "success")
    throw new Error("Provided email or passWord is incorrect!");

  const { user } = res.data.data;
  return user;
}

export async function signup({ fullName, email, password, passwordConfirm }) {
  console.log(fullName, email, password, passwordConfirm);
  const res = await axios.post("/users/signup", {
    fullName,
    email,
    password,
    passwordConfirm,
  });
  console.log(res.data);

  const { user } = res.data.data;
  return user;
}

export async function updateCurrentUser({ email, password }) {
  // console.log(email, password);
  // const res = await axios.patch("/users/login", { email, password });

  // if (res.data.status !== "success")
  //   throw new Error("Provided email or passWord is incorrect!");

  // const { user } = res.data.data;
  // return user;
  return null;
}

export async function getCurrentUser() {
  // console.log(email, password);
  const res = await axios.get("/users/me");

  console.log(res.data.data);
  if (res.data.status !== "success")
    throw new Error("Provided email or passWord is incorrect!");
  const { data } = res.data.data;
  return data;
}

export async function logout({ email, password }) {
  // console.log(email, password);
  // const res = await axios.post("/users/login", { email, password });

  // if (res.data.status !== "success")
  //   throw new Error("Provided email or passWord is incorrect!");

  // const { user } = res.data.data;
  // return user;

  return null;
}
