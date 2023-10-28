"use client"
import prisma from '@/db'
import {Card, Flex, Avatar, Box, Text} from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import FindArtistById from '@/pages/api/helper/findArtistById'
// interface ArtPieceProps{
//     title: string
//     artist: string
//     price: number
//     url: string
// }
// export default function({ title, artist, price, url} : ArtPieceProps){

//     const [artistFound, setArtistFound] = useState<{firstName: string, lastname:string | null}>({firstName:'',lastname:''})
//     useEffect(() =>{

//         const fetchArtist = async () =>{
//             const a = await FindArtistById(artist)
//             if(a){
//                 setArtistFound({firstName: a.firstName, lastname: a.lastName})
//             }
//         }
//         fetchArtist()
//     },[])

//     return(
//         <Card style={{ maxWidth: 240}}>
//             <Flex gap="3" align="center" direction={'column'}>
//                 <Avatar
//                     size="1"
//                     src={url}
//                     radius="full"
//                     fallback="T"
//                     // width={'40px'}
//                     // height={'40px'}
//                 />
//                 <div className=' text-xs p-2'>
//                     <p>Title: {title}</p>
//                     <p>Artist: {artistFound.firstName + ' ' + artistFound.lastname}</p>
//                     <p>Price: {'$' + price +  "CAD"}</p>
//                 </div>
//                 {/* <Box p={'3'} >
//                     <Text as="div" weight="bold" size={"1"} color='red'>
//                         {title}
//                     </Text>
//                     <Text as="div" size="2" >
//                         {artist}
//                     </Text>
//                     <Text as="div" size="2">
//                         {'$' + price +  "CAD"}
//                     </Text>
//                 </Box> */}
//             </Flex>
//         </Card>

//     )
// }


interface ArtPieceProps {
  title: string;
  artist: string;
  price: number;
  url: string;
}

export default function ArtPiece({ title, artist, price, url }: ArtPieceProps) {
  const [artistFound, setArtistFound] = useState<{ firstName: string; lastname: string | null }>({
    firstName: '',
    lastname: '',
  });

  useEffect(() => {
    const fetchArtist = async () => {
      const a = await FindArtistById(artist);
      if (a) {
        setArtistFound({ firstName: a.firstName, lastname: a.lastName });
      }
    };
    fetchArtist();
  }, []);

  return (
    <div className="max-w-xs border border-gray-500">
      <div className="">
            <div className=" ">
                <div className="relative">
                    <img src={url} alt={title} className="w-full h-40 object-cover "/>
                </div>
                <div className="text-xs p-2">
                    <p className="font-semibold">Title: {title}</p>
                    <p>
                    Artist: {artistFound.firstName} {artistFound.lastname}
                    </p>
                    <p>Price: ${price} CAD</p>
                </div>
            </div>
      </div>
    </div>
  );
}
