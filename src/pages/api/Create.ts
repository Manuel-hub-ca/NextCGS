// route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../db';

interface ArtistData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  entityType: string
}

export default async function (req: NextApiRequest, res: NextApiResponse)  {
  try {
    const { firstName, lastName, phone, email, entityType }: ArtistData = req.body;
    if (!firstName || !lastName || !phone || !email) {
      return res.status(400).json({ error: 'Invalid input!' });
    }

    if(entityType === "Curator"){
      const curator = await prisma.curator.create({
        data:{
          firstName,
          lastName,
          phone,
          email
        }
      })
      return res.status(200).json(curator)
    }else{
      const artist = await prisma.artist.create({
        data: {
          firstName,
          lastName,
          phone,
          email,
        },
      }); 
    return res.status(200).json(artist);
    }
  

  } catch (error) {
    console.error('Error creating artist:', error);
    return res.status(500).json({ error: 'Error creating artist' });
  }
    

    // redirect()
};
