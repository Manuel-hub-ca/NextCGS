import prisma from '@/db';
import Link from 'next/link';

function getAllCurators() {
  return prisma.curator.findMany();
}
console.log('curators index ');
export default async function Curators() {
  const curators = await getAllCurators();
  return (
    <div className="flex-col justify-center items-center">
      <Link href={'/Curators/New'}>New</Link>
      <ul>
        {curators.map((c, i) => (
          <li key={i}>{c.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
