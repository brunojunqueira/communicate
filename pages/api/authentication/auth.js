import Prisma from '../../../prisma';

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { hash } = req.body;

    try{
      const key = await Prisma.key.findUnique({
        where:{
          keyhash: hash
        }
      });
      const user = await Prisma.user.findUnique({
        where:{
          id: key.authorId
        }
      });

      if(key){
        res.status(200).send(user.metadata);
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