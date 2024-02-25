// Correct import if axios is a package installed in node_modules
import axios from 'axios';

const instance = axios.create({
  baseURL: "https:localhost:3000",
});

export default instance;