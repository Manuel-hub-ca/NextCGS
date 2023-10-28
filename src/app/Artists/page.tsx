import prisma from '@/db';
import Link from 'next/link';
import { Table } from '@radix-ui/themes';
function getAllArtists() {
  return prisma.artist.findMany();
}

export default async function ArtPieces() {
  const artists = await getAllArtists();
  return (
    <div className='w-2/3 mx-auto my-6'>
      <Link href={'/Artists/New?entityType=Artist'}>New</Link>
      <Table.Root variant="surface" style={{border:'none'}}>
          <Table.Header >
            <Table.Row style={{color:'cyan'}} className=' bg-slate-400'>
              <Table.ColumnHeaderCell>Artist Id</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Phone</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          {artists.map((c, i) => (
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
