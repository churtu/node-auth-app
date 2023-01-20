import { Request, Response } from "express";
import { googleValidateToken } from '../helpers/google_validate_token';


export const googleAuth = async ( req: Request, res: Response ) => {
    const {token} = req.body;

    if(!token) {
        return res.json({
            ok: false,
            msg: 'No hay token en la petición.'
        });
    }

    const googleUser = await googleValidateToken(token);

    if(!googleUser){
        return res.status(400).json({
            ok: false
        });
    }

    // YA ESTAMOS AUTENTICADOS, GUARDAR EN BASE DE DATOS ETC...
    return res.json({
        ok: true,
        token,
        googleUser
    });
}