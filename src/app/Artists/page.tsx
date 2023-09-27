import prisma from '@/db';
import Link from 'next/link';

function getAllArtists() {
  return prisma.artist.findMany();
}

export default async function ArtPieces() {
  const artists = await getAllArtists();
  return (
    <div className="flex-col justify-center items-center">
      <Link href={'/Artists/New'}>New</Link>
      <ul>
        {artists.map((a, i) => (
          <li key={i}>{a.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
