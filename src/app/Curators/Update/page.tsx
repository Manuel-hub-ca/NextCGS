"use client"
import Input from '@/app/components/Input';
import { Curator } from '@/app/types/Curator';
import { useRouter, useSearchParams } from 'next/navigation';
import { FindCuratorById } from '../FindCuratorById';
import { ChangeEvent, useEffect, useState } from 'react';
import GoAndUpdate from './GoAndUpdate';
import AllCurators from '../AllCurators';


export default function UpdateCurator() {
  const [curator, setCurator] = useState<Curator | null>(null);
  const searchParams = useSearchParams();
  const curatorParam = searchParams?.get('curator');
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (curatorParam !== undefined && curatorParam !== null) {
          // Parse the JSON string
          const curatorData: Curator = JSON.parse(curatorParam);

          console.log(curatorData);

          // Use the curatorData in the FindCuratorById call
          const updatedCuratorData = await FindCuratorById(curatorData.id);

          setCurator(updatedCuratorData);
        } else {
          console.log('No curator parameter found');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [curatorParam]);


const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;

  setCurator((prevCurator) => ({
    ...(prevCurator as Curator),
    [name]: value,
  }));
};

  const handleGoAndUpdate = async (data: FormData) => {
    const c = await GoAndUpdate(data)
    if(c){
      router.push('/Curators')
    }
 
  }

  return (
    <>
    <form action={handleGoAndUpdate}>
    {curator && 
      <div>
        <div>
          <label>Id:</label>
          <input className=" rounded-sm bg-transparent" value={curator.id} name='id' readOnly/>
        </div>

        <div>
          <label>firstName:</label>
          <input className=" rounded-sm bg-transparent" value={curator.firstName} name='firstName' onChange={handleInputChange}/>
        </div>

        <div>
        <label>lastName</label>
        <input className=" rounded-sm bg-transparent" value={curator.lastName} name='lastName' onChange={handleInputChange}/>
        </div>

        <div>
          <label>phone</label>
          <input className=" rounded-sm bg-transparent" value={curator.phone} name='phone' onChange={(e) => handleInputChange(e)}/>
        </div>

        <div>
        <label>Email</label>
        <input className=" rounded-sm bg-transparent" value={curator.email} name='email' onChange={handleInputChange}/>
        </div>

      </div>}
      <button type='submit'>Update</button>
    </form>
      
    </>
  );
}
