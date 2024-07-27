import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/artuuuuuuuuuur",
  headers: {
    Authorization: "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",
  },
});

export default api;
