import { io } from "socket.io-client";
const ENDPOINT = "https://mern-socialapp123.herokuapp.com/" || "http://localhost:8080"
export default io(ENDPOINT)