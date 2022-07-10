import Prisma from '../../../prisma';

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const {hash} = req.body;

    try{
        await Prisma.key.delete({
          where: {
            keyhash: hash
          }
        });
        res.status(200).send('success');
    }
    catch(e){
      console.log(e);
      res.status(400).send('fail');
    }
  }
  else res.status(400).send('fail');

}