import Prisma from '../../prisma';

export default async function handler(req, res){

    const { hash } = req.body;
    
    try {
        const key = await Prisma
            .key
            .findUnique({
                where: {
                    keyhash: hash
                }
            }
        );

        let userId = key.authorId;

        const metadata = await Prisma
            .usermetadata
            .findUnique({
                where: {
                    userId: userId
                }
            }
        );

        res.send(metadata);

    } catch {
        res.status(400).send(null);
    }
    
}