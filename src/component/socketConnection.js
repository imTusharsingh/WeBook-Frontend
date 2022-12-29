import { io } from "socket.io-client";
const ENDPOINT = "https://webook-api.onrender.com" || "http://localhost:4000"
export default io(ENDPOINT)