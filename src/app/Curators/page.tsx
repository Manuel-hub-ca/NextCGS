import prisma from '@/db';
import Link from 'next/link';
import AllCurators from './AllCurators';
import { Curator } from '../types/Curator';


export function getAllCurators() {
  return prisma.curator.findMany();
}

async function deleteCurator(id: string): Promise<Curator|null>{
  "use server"
  try {
    const Curator  = await prisma.curator.delete({where:{
      id: id
    }})
    return Curator
  } catch (error) {
    console.log(error)
  }
  return null
}

async function updateCurator(id: string) {
  
}
export default async function Curators() {
  const curators = await getAllCurators();

  return (
    <div className=" w-2/3 mx-auto my-6">
      <Link href={'/Curators/New?entityType=Curator'}>New</Link>
      <AllCurators curators={curators} deleteCurator={deleteCurator} />
      <Link href={'/'}>Go Home</Link>
    </div>
  );
}
