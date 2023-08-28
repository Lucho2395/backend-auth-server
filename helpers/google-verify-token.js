

const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '1072897188232-hmckfun9ascfi1624kf3q3t40s76jark.apps.googleusercontent.com';

const client = new OAuth2Client();

const validarGoogleIdToken = async ( token ) => {

    try {

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '1072897188232-umbu58f6lm1p8dl0ab57c8qqm2l43i52.apps.googleusercontent.com',
                '1072897188232-vskpmmrcp6pf98h1fuqbib836m6gqh4t.apps.googleusercontent.com'
            ],  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();

        console.log(' ========== PAYLOAD ========== ');
        console.log(payload);
        
    
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    }catch (error){

        return null;

    }


}

module.exports = {
    validarGoogleIdToken
}