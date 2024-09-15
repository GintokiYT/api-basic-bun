import { Router } from "express";
import routerProduct from "./product";

const router: Router = Router();

router.use('/product', routerProduct);

export default router;
