import axios from "./axios";

export async function getCabins() {
  const res = await axios.get("/cabins");

  if (res.data.status !== "success")
    throw new Error("Cabins could not be loaded");

  console.log(res.data.data.data);
  const { data } = res.data.data;
  return data;
}

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
  if (cabin.image) cabin.image = cabin.image.name;
  const res = await axios.patch(`/cabins/${id}`, cabin);

  const { data } = res.data.data;
  return data;
}

export async function deleteCabin(id) {
  await axios.delete(`/cabins/${id}`);

  return null;
}
