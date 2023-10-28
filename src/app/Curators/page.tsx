import prisma from '@/db';
import Link from 'next/link';
import { Table } from '@radix-ui/themes'

// Your code here

function getAllCurators() {
  return prisma.curator.findMany();
}
console.log('curators index ');
export default async function Curators() {
  const curators = await getAllCurators();
  return (
    <div className=' w-2/3 mx-auto my-6'> 
        <Link href={'/Curators/New?entityType=Curator'}>New</Link>
        <Table.Root variant="surface">
          <Table.Header >
            <Table.Row style={{color:'cyan'}} className=' bg-slate-400'>
              <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          {curators.map((c, i) => (
          <Table.Body>
            <Table.Row key={i} style={{color:'white'}}>
              <Table.RowHeaderCell>{c.id}</Table.RowHeaderCell>
              <Table.RowHeaderCell>{c.firstName + ' ' + c.lastName}</Table.RowHeaderCell>
              <Table.Cell>{c.email}</Table.Cell>
              <Table.Cell>{c.phone}</Table.Cell>
            </Table.Row>
          </Table.Body>
          ))}
        </Table.Root>
        

       <Link href={'/'}>Go Home</Link>
    </div>



  );
}

// import prisma from '@/db';
// import Link from 'next/link';

// // Your code here

// function getAllCurators() {
//   return prisma.curator.findMany();
// }

// console.log('curators index ');

// export default async function Curators() {
//   const curators = await getAllCurators();
//   return (
//     <div className="flex-col justify-center items-center">
//       {/* <Link href={'/Curators/New?entityType=Curator'}>New</Link> */}
//       <table className="min-w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
//               Full name
//             </th>
//             <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
//               Email
//             </th>
//             <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
//               Phone
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {curators.map((c, i) => (
//             <tr key={i}>
//               <td className="px-6 py-4 whitespace-no-wrap">{c.firstName + ' ' + c.lastName}</td>
//               <td className="px-6 py-4 whitespace-no-wrap">{c.email}</td>
//               <td className="px-6 py-4 whitespace-no-wrap">{c.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* <Link href={'/'}>Go Home</Link> */}
//     </div>
//   );
// }



