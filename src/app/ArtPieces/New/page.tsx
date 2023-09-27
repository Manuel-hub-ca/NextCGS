'use client';

import UploadButtonPage from '@/app/components/UploadButtonPage';
import { useState } from 'react';
import CAP from './CAP';
import Image from '@/app/types/Image';
export default function Page() {
  const [images, setImages] = useState<Image[]>([]);

  return (
    <div>
      <UploadButtonPage images={images} setImages={setImages} />
      <CAP images={images} />
      {/* other components and JSX */}
    </div>
  );
}
