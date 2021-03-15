import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();
app.listen(process.env.PORT || 8081, ()=> console.log("Server is running!"))