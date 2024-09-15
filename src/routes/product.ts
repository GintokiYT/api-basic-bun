import { Request, Response, Router } from "express";
import prisma from "../db/prisma";

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json({ error: 'Error al obtener los productos' })
  }
})

export default router;