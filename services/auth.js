import axios from "axios";
import GetLocation from "../modules/GetLocation";
import SHA256 from '../modules/SHA256';

export async function signInRequest(email, password){

    const defaultValues = {
        session: null,
        user: null
    }

    const userhash = SHA256(`${email}${password}`);
    const location = await GetLocation();

    try{
        const token = await axios
            .post('/api/authentication/hauth', {
                hash: userhash,
                location: location
            });
        if(token.status != 400){
            const hash = SHA256(`${userhash}${token.data}`);
            const user = await axios
                .post('/api/authentication/auth', {
                    hash: hash
                });
            let data = { 
                session: hash, 
                user: user.data 
            };
            
            return data;
        }     
    }
    catch(e){
        return defaultValues;
    }
}

export async function findSession(hash){
    const { data } = await axios
        .post('/api/session', {
            hash: hash
        });
    
    if(data) {
        return data;
    }

    return null;
}

export async function signOutRequest(hash){
    const { data } = await axios
        .post('/api/authentication/disconnect', {
            hash: hash
        });
    return data;
}