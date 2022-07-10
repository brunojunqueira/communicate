import Prisma from "../../prisma"
import SHA256 from "../../modules/SHA256";

export default async function handler(req, res) {
  
    const {email, password, name} = req.body;

    const hash = SHA256(`${email}${password}`);

    if(email && password && name){
        try{
            const user = await Prisma.user.create({
                data:{
                    email: email,
                    hash: hash,
                    metadata: {
                        create:{
                            email: email,
                            name: name
                        }
                    }
                }
            });

            res.status(200).send(user); 
        }
        catch{
            res.status(400).send('fail, user already exists');  
        }
    } else {
        res.status(400).send('fail, missing arguments');
    }
    


}
