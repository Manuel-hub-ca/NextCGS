'use client';

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import '@uploadthing/react/styles.css';

import { UploadButton } from '@uploadthing/react';

import { OurFileRouter } from '../api/uploadthing/core';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import UploadButtonPageProps from '../types/UploadButtonPageProps';


export default function UploadButtonPage({
  images,
  setImages,
}: UploadButtonPageProps) {
  const title = images.length ? (
    <>
      <p>Upload Complete!</p>
      <p className="mt-2">{images.length} files</p>
    </>
  ) : null;

  const imgList = (
    <>
      {title}
      <ul>
        {images.map((image: { key: string; url: string }) => (
          <li key={image.url} className="mt-2">
            <Image src={image.url} alt="photoImage" width={50} height={50} />
            <Link href={image.url} target="_blank">
              {image.url}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res) {
            setImages(res);
            const json = JSON.stringify(res.map((image) => image.url));
            // Do something with the response
            console.log(json);
          }
          //alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {imgList}
    </main>
  );
}
