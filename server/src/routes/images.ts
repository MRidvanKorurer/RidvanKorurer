import express, {Router} from "express";
import { allImages } from "../controllers/images";

const router: Router = express.Router();

router.get("/", allImages);

export default router;