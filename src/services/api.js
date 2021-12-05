import axios from "axios";

// Realtime Database
const BASE_URL = 'https://graduation-project-aee72-default-rtdb.europe-west1.firebasedatabase.app';

export const getPosts = () => {
  return axios.get(`${BASE_URL}/posts.json`)
}
