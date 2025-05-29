import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// Serve static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle all other routes with index.html (React Router fix)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//routes import
import userRouter from "./routes/user.route.js";

//routes declaration
app.use("/api/v1/users", userRouter);

export { app }