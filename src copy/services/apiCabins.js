//// Disconnect supabase
// npm uninstall @supabase/supabase-js

import axios from "./axios";
// import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  // const { data, error } = await supabase.from("cabins").select("*");

  // if (error) {
  //   console.error(error);
  //   throw new Error("Cabins could not be loaded");
  //
  const res = await axios.get("/cabins");

  if (res.data.status !== "success")
    throw new Error("Cabins could not be loaded");

  console.log(res.data.data.data);
  const { data } = res.data.data;
  return data;
}

// export async function createEditCabin(newCabin, id) {
// const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
// const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//   "/",
//   ""
// );
// const imagePath = hasImagePath
//   ? newCabin.image
//   : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
// let query = supabase.from("cabins");

// if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

// if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
// const { data, error } = await query.select().single();

// if (error) {
//   console.error(error);
//   throw new Error("Cabins could not be created");
// }

// if (hasImagePath) return data;

// const { error: storageError } = await supabase.storage
//   .from("cabin-images")
//   .upload(imageName, newCabin.image);

// if (storageError) {
//   await supabase.from("cabins").delete().eq("id", data.id);
//   console.error(storageError);
//   throw new Error(
//     "Cabins image could not be uploaded and the cabin was not created"
//   );
// }

// return data;

//   return {};
// }

// export async function createCabin(newCabin) {
//   console.log(newCabin);
//   const document = {
//     description: newCabin.description,
//     name: newCabin.name,
//     maxCapacity: newCabin.maxCapacity,
//     regularPrice: newCabin.regularPrice,
//     discount: newCabin.discount,
//   };
//   const formData = new FormData();
//   formData.append("image", newCabin.image);
//   formData.append("document", document);
//   const res = await axios.post("/cabins", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   const { data } = res.data.data;

//   return data;
// }


export async function createCabin(newCabin) {
  const formData = new FormData();
  formData.append("image", newCabin.image); // The file

  // Append the rest of the fields individually
  formData.append("name", newCabin.name);
  formData.append("description", newCabin.description);
  formData.append("maxCapacity", newCabin.maxCapacity);
  formData.append("regularPrice", newCabin.regularPrice);
  formData.append("discount", newCabin.discount);

  const res = await axios.post("/cabins", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data.data.data;
}

export async function editCabin(cabin, id) {
  console.log(cabin, id);
  if (cabin.image) cabin.image = cabin.image.name;
  console.log(cabin);
  const res = await axios.patch(`/cabins/${id}`, cabin);

  console.log(res.data.data.data);
  const { data } = res.data.data;
  return data;
}

export async function deleteCabin(id) {
  await axios.delete(`/cabins/${id}`);

  return null;
}

/////////////////////////////////////////////////////////////////

// const API_URL = "http://localhost:8000/api/cabins";

// export async function getCabins() {
//   const res = await fetch(API_URL);
//   if (!res.ok) throw new Error("Failed to fetch cabins");
//   return res.json();
// }

// export async function createCabin(cabinData) {
//   const res = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(cabinData),
//   });
//   if (!res.ok) throw new Error("Failed to create cabin");
//   return res.json();
// }
