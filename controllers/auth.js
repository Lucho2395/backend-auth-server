const { response } = require('express');
const { validarGoogleIdToken } = require('../helpers/google-verify-token');
//const router = require('../routes/auth');

const googleAuth = async ( req, res = response ) => {

    const token = req.body.token;
    if (!token) {
        return res.json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    const googleUser = await validarGoogleIdToken( token );

    if( !googleUser ){
        return res.status(400).json({
            ok: false
        });
    }

    //TODO: Guardar en su base de datos

    res.json({
        ok: true,
        googleUser
    });


}

module.exports = {
    googleAuth
}