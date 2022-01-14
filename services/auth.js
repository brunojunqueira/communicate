import axios from "axios";
import SHA256 from '../modules/SHA256';

export async function signInRequest(email, password){

    const defaultValues = {
        token: null,
        user: null
    }

    const data = {
        token: null,
        user: null
    }

    const userhash = SHA256(`${email}${password}`);
    try{
        const token = await axios.post('/api/authentication/hauth', JSON.parse(`{ "hash" : "${userhash}" }`));
        if(token.status != 400){
            const keyhash = SHA256(`${userhash}${token.data}`);
            const user = await axios.post('/api/authentication/auth', JSON.parse(`{ "userhash" : "${userhash}", "keyhash" : "${keyhash}" }`));
            data = {token: token.data, user: user.data};
            return data;
        }
        else return defaultValues;
    }
    catch(e){
        console.log(e);
        return defaultValues
    }

    

}