"use client"
import { Curator } from "../types/Curator"
import { useState, useEffect } from "react"
import updateCurators from "./UpdateTable"
import Link from "next/link"

interface CuratorTableProps{
    curators: Curator[],
    deleteCurator: (id: string) => Promise<Curator | null>
}


export default function AllCurators({curators, deleteCurator}: CuratorTableProps){
  const [curs, setCurs] = useState(curators)


  useEffect(() => {
   const cs = updateCurators().then((updatedCurators) => {
    if(updatedCurators !== null){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      setCurs((prevCurs) => updatedCurators)
    }
  })
  }, []);

  const handleDelete = async (id: string) => {
    const deletedCurator = await deleteCurator(id)
    if(deletedCurator){
      setCurs((prevCur) => prevCur.filter((c) => c.id !== id))
    }
  }
    return(
        <table className='min-w-full bg-white border border-gray-300'>
        <thead>
          <tr className='bg-gray-800 text-white'>
            <th className='py-2 px-4'>Id</th>
            <th className='py-2 px-4'>Full Name</th>
            <th className='py-2 px-4'>Last Name</th>
            <th className='py-2 px-4'>Phone</th>
            <th className='py-2 px-4'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {curs.map((c) => (
            <tr key={c.id}>
              <td className='py-2 px-4'>{c.id}</td>
              <td className='py-2 px-4'>{c.firstName}</td>
              <td className='py-2 px-4'>{c.lastName}</td>
              <td className='py-2 px-4'>{c.phone}</td>
              <td className='py-2 px-4'>
                <button onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
              <td>
                <Link href={{pathname:'/Curators/Update', query: {curator: JSON.stringify(c)}}}>Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}