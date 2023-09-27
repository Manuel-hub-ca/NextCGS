'use server';
import prisma from '@/db';
import { redirect } from 'next/navigation';
import Image from '../../types/Image'
export default async function createArtPiece(
  data: FormData,
  images:Image[]
) {
  const title: string = data.get('t') as string;
  const year: number = parseInt(data.get('y') as string);
  const price: number = parseFloat(data.get('p') as string);
  const estimate: number = parseFloat(data.get('e') as string);
  const artistId: string = data.get('aId') as string;
  const curatorId: string = data.get('cId') as string;

  await prisma.artPiece.create({
    data: {
      title: title,
      imgUrl: images[0].url,
      year: year,
      price: price,
      estimate: estimate,
      artistId: artistId,
      curatorId: curatorId,
    },
  });
  redirect('/ArtPieces');
}
