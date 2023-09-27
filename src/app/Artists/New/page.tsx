import prisma from '@/db';
import { redirect } from 'next/navigation';
import Input from '@/app/components/Input';

async function createArtist(data: FormData) {
  // id String @id @default(uuid())
  // firstName String
  // lastName String
  // phone String
  // artPiece String @default("")
  // artPieces ArtPiece[] // Define the opposite relation field
  'use server';
  const firstName: string = data.get('fN') as string;
  const lastName: string = data.get('lN') as string;
  const phone: string = data.get('phone') as string;
  const email: string = data.get('email') as string;

  // 'use server';

  // const title: string = data.get('t') as string;
  // const year: number = parseInt(data.get('y') as string);
  // const price: number = parseFloat(data.get('p') as string);
  // const estimate: number = parseFloat(data.get('e') as string);
  // const artistId: string = data.get('aId') as string;
  // const curatorId: string = data.get('cId') as string;

  await prisma.artist.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
    },
  });

  redirect('/Artists');
}
export default function Page() {
  return (
    <div className="flex flex-col w-11/12 h-screen mx-auto">
      <form action={createArtist} className="w-full h-1/2 mx-auto">
        <h2 className=" mt-3 text-2xl text-white">Create Artist</h2>
        {/* <label>firstName:</label> */}

        <Input
          placeholder="enter artist firstname"
          top={80}
          type="text"
          name="fN"
        >
          First Name
        </Input>
        <Input
          placeholder="enter artist lastname"
          top={162}
          type="text"
          name="lN"
        >
          Last Name
        </Input>
        <Input
          placeholder="enter artist phone number"
          top={242}
          type="text"
          name="phone"
        >
          Phone
        </Input>

        <Input
          placeholder="enter artist email"
          top={322}
          type="text"
          name="email"
        >
          Email
        </Input>

        <button
          className=" fixed bottom-10 right-8 w-1/4 h-12 hover:bg-slate-50 bg-slate-200 rounded-sm"
          type="submit"
        >
          Create Artist
        </button>
      </form>
    </div>
  );
}
