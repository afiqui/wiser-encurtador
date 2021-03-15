import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();
app.listen(8081, ()=> console.log("Server is running!"))