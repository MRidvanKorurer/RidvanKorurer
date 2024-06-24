import express, {Router} from "express";
import imagesRoute from "./images";

const router: Router = express.Router();

router.use("/images", imagesRoute);

export default router;