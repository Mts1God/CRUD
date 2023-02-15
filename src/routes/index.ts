import { Router } from "express";
import { Request, Response } from "express";
import * as  usuarioControler from "../controllers/usuarioController"

const router = Router()

router.get('./', (req:Request, res:Response) =>{
    res.send("SERVIDOR RODANDO 8D")
})

export default router

router.get('/usuarios',usuarioControler.index)