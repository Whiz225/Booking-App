import axios from "./axios";

export async function getSettings() {
  const res = await axios.get("/settings");
  const { data } = res.data.data;

  return data;
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  const res = await axios.patch("/settings", newSetting);
  const { data } = res.data.data;

  return data;
}
