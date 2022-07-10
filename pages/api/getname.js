import Prisma from "../../prisma"
import SHA256 from "../../modules/SHA256";

export default async function handler(req, res) {
  
    if(req.method === 'POST'){
        const {userhash, key} = req.body;

        try{
            const user = await Prisma.user.findUnique({where:{hash:userhash}});
            if(SHA256(user.key) === key) res.status(200).send(user.name);
            else res.status(401).send('Wait a minute, who are you?');
            
        }
        catch {res.status(401).send('Wait a minute, who are you?');}
    }
    else res.status(401).send('Wait a minute, who are you?');

}
