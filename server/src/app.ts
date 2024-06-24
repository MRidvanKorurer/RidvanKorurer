import express, {Express} from "express";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


// middlewares
app.use(express.json());
app.use(cors());


// routing


// error

app.listen(port, () => {
    console.log("Server is running on port " + port);
})