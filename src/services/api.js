import axios from "axios";

const url = 'https://graduation-project-aee72-default-rtdb.europe-west1.firebasedatabase.app/posts.json';

export const getPosts = () => {
  return axios.get(url)
}
