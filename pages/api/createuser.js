import Prisma from "../../modules/Prisma"
import SHA256 from "../../modules/SHA256";

export default async function handler(req, res) {
  
    const {email, password, name} = req.body;

    const hash = SHA256(`${email}${password}`);

    try{
        const user = await Prisma.user.create({
            data:{
                email: email,
                password: password,
                name: name,
                hash: hash
            }
        });

        res.send(user);
    }
    catch{
        res.send('Deu ruim');
    }


}
