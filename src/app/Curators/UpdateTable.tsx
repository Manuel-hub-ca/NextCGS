"use server"
import { Curator } from "../types/Curator";
import { getAllCurators } from "./page";

export default async function updateCurators():Promise<Curator[] | null>{
    try {
        const curators = await getAllCurators()
        return curators
    } catch (error) {
        console.log(error)
    }
 
    return null
}