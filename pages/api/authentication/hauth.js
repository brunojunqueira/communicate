import ANGen from "../../../modules/ANGen";
import Prisma from "../../../modules/Prisma"
import SHA256 from "../../../modules/SHA256";

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const {hash} = req.body;
    try{
      const user = await Prisma.user.findUnique({where:{hash:hash}});
      if(user != null){
        const key = ANGen(50);
        await Prisma.user.update({where:{hash:hash}, data:{key:key}});
        const keyhash = SHA256(key);
        res.status(200).send(keyhash);
      }
      else{
        res.status(400).send(null);
      }
    }
    catch{
      res.status(400).send(null);
    }
  }
  else res.status(400).send(null);
}