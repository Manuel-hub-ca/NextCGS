"use server"
import prisma from "@/db";
import { Curator } from "../types/Curator";

export async function FindCuratorById(id:string): Promise<Curator | null> {

    console.log('heyy')
    try {
        const curator = await prisma.curator.findUnique({where:{
            id: id
        }})
        return curator
    } catch (error) {
        console.log(error)
    }

    return null
}