import axios from "axios";

export const clickButton = async (userId) => {
  const response = await axios.post("http://localhost:5000/api/click", {
    userId,
  });
  return response.data;
};
