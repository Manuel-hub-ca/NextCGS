import prisma from '@/db';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../components/Card';
import { Grid } from '@radix-ui/themes';
import { title } from 'process';
function getAllArtPieces() {
  return prisma.artPiece.findMany();
}

export default async function ArtPieces() {
  const artPieces = await getAllArtPieces();
  return (

        <div className="w-2/3 mx-auto my-6">
          <Link href={'/ArtPieces/New'}>New</Link>
          
          <div className="grid grid-cols-3 gap-3 place-items-center">
            {artPieces.map((a, i) => (
              <div key={i} className="p-3">
                <Card title={a.title} artist={a.artistId} price={a.price} url={a.imgUrl} />
              </div>
            ))}
          </div>
       {/* <Grid columns={'3'} width={'auto'} height={'auto'} className=' place-items-center'> 
     {artPieces.map((a,i)=>(
      <div className='p-3'>
            <Card key={i} title={a.title} artist={a.artistId} price={a.price}  url={a.imgUrl} />
      </div> */}
      {/* </Grid> */}
          <Link href={'/'}>Go Home</Link>
        </div>

    
//   <div className="w-2/3 mx-auto my-6">
//   <Link href={'/ArtPieces/New'}>New</Link>
//   <div className="flex flex-wrap">
//     {artPieces.map((a, i) => (
//       <div key={i} className="w-1/3 px-3 py-3">
//         <Card title={a.title} artist={a.artistId} price={a.price}  url={a.imgUrl} />
//       </div>
//     ))}
//   </div>
//   <Link href={'/'}>Go Home</Link>
// </div>

    // I am not using grid becasue i am going to add more childs dynamically in the future
    // <div className="w-2/3 h-full mx-auto">
    //   <Link href={'/ArtPieces/New'}>New</Link>
    //   <Grid columns={'3'} width={'auto'} height={'auto'} className=' place-items-center' gapY={'1'}> 
    //     {artPieces.map((a,i)=>(
    //       <Card key={i} title={a.title} artist={a.artistId} price={a.price}  url={a.imgUrl} />
    //     ))}
    //   </Grid>
    //   <Link href={'/'}>Go Home</Link>
    // </div>
  );
}
