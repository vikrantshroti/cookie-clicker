import axios from "axios";

export const clickButton = async (userId) => {
  const response = await axios.post("http://localhost:5001/api/click", {
    userId,
  });
  return response.data;
};

export const createUser = async (userId) => {
  const response = await axios.post("http://localhost:5001/api/user/create", {
    userId,
  });
  return response.data;
};
