

import { OAuth2Client } from 'google-auth-library';

const CLIENT_ID = '895710939089-anunujn7j7lt97lmakctfb1c3ll21aea.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

export const googleValidateToken = async (token: string) => {

    try {

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID
        });

        const payload = ticket.getPayload();
        
        return {
            email: payload?.email, 
            name: payload?.name, 
            picture: payload?.picture 
        };

    } catch (error) {
        console.log(error);
        return '';
    }
}

