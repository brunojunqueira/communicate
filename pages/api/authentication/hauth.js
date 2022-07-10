import ANGen from "../../../modules/ANGen";
import Prisma from "../../../prisma"
import SHA256 from "../../../modules/SHA256";

export default async function handler(req, res) {

  if(req.method === 'POST'){

    const { hash, location } = req.body;

    try{

      const key = ANGen(50);
      const keyhash = SHA256(key);

      await Prisma.user.update({
        where: {
          hash: hash
        },
        data: {
          keys: {
            create: {
                key: key,
                keyhash: SHA256(`${hash}${keyhash}`),
                location: location
            }
          }
        }
      });

      res.status(200).send(keyhash);

    }

    catch(e){
      console.log(e);
      res.status(400).send(null);
    }

  }
  else res.status(400).send(null);
}