import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./database/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
// import cors from "cors"

dotenv.config();
const PORT = process.env.PORT || 8000;


const app = express();
// app.use(cors());


app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Web Developer");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
})