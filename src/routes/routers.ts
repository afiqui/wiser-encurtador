import { Router } from 'express';
import { CreateRedirectController } from "../controllers/CreateRedirectController";
import { RedirectController } from "../controllers/RedirectController";

const router = Router();
const createRedirectController = new CreateRedirectController();
const redirectController = new RedirectController();

router.post("/encurtador", createRedirectController.create);
router.get("/:url", redirectController.find);
router.get("/");

export { router };


