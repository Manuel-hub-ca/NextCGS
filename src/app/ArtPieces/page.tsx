import prisma from '@/db';
import Link from 'next/link';
import Image from 'next/image';

function getAllArtPieces() {
  return prisma.artPiece.findMany();
}

export default async function ArtPieces() {
  const artPieces = await getAllArtPieces();
  return (
    <div className="flex-col justify-center items-center">
      <Link href={'/ArtPieces/New'}>New</Link>
      <ul>
        {artPieces.map((ap, i) => (
          <li key={i}>
            {ap.price}
            <Image src={ap.imgUrl} alt="the art image" width={50} height={50} />
          </li>
        ))}
      </ul>
    </div>
  );
}
