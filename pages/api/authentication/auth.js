import Prisma from "../../../modules/Prisma"
import SHA256 from "../../../modules/SHA256";

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const {userhash, keyhash} = req.body;

    try{
      const user = await Prisma.user.findUnique({where:{hash:userhash}});
      const hashkey = SHA256(`${user.hash}${SHA256(user.key)}`);

      if(keyhash === hashkey){
        res.status(200).send(JSON.parse(`{"name":"${user.name}","email":"${user.email}"}`));
      }
      else{
        res.status(401).send("Wait a minute, who are you?");
      }
    }
    catch(e){
      console.log(e);
      res.status(400).send(null);
    }
  }
  else res.status(400).send(null);

}