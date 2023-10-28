"use server"
import { ArtPiece } from "@/app/types/ArtPiece";
import prisma from "@/db";

export default async function FindArtistById(artistId: string):Promise<ArtPiece | null> {

        try {
            const a:ArtPiece | null = await prisma.artist.findUnique({where:{
                id:artistId
            }})
            return a
        } catch (error) {
            console.log('Error fetching artist info:', error)
            return null
        }
}