'use client';
import prisma from '@/db';
import { redirect } from 'next/navigation';
import Input from '@/app/components/Input';
import UploadButtonPage from '@/app/components/UploadButtonPage';
import createArtPiece from './createArtPiece';
import Image from '../../types/Image'

const CAP: React.FC<{images: Image[]}> = ({ images }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission.

    const form = e.currentTarget;
    const formData = new FormData(form); // Gather form data.

    try {
      await createArtPiece(formData, images); // Send the data to the server, including images.
    } catch (error) {
      console.error('Error creating Art Piece', error); // Handle error.
    }
  };

  return (
    <div className="flex flex-col w-11/12 h-screen mx-auto">
      <form onSubmit={handleSubmit} className="w-full h-1/2 mx-auto">
        <h2 className=" mt-3 text-2xl text-white">Create Art Piece</h2>
        {/* <label>firstName:</label> */}

        <Input placeholder="enter title " top={80} type="text" name="t">
          Title
        </Input>

        <Input placeholder="enter year" top={162} type="number" name="y">
          Year
        </Input>
        <Input placeholder="enter price" top={242} type="number" name="p">
          Price
        </Input>

        <Input placeholder="enter estimate" top={322} type="number" name="e">
          Estimate
        </Input>

        <Input placeholder="enter artist id" top={402} type="text" name="aId">
          Artist Id
        </Input>

        <Input placeholder="enter curator id" top={482} type="text" name="cId">
          Curator Id
        </Input>

        <button
          className=" fixed bottom-10 right-8 w-1/4 h-12 hover:bg-slate-50 bg-slate-200 rounded-sm"
          type="submit"
        >
          Create Art Piece
        </button>
      </form>
    </div>
  );
};

export default CAP;
