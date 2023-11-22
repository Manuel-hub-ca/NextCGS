"use server"
import { Curator } from "@/app/types/Curator";
import prisma from "@/db";

export default async function GoAndUpdate(data: FormData): Promise<Curator | null>  {

    try {
        const curatorId = data.get('id')
        const firstName = data.get('firstName')
        const lastName = data.get('lastName')
        const phone = data.get('phone')
        const email = data.get('email')

        if(typeof curatorId !== "string" || typeof firstName !== "string" || typeof 
        lastName !== "string" || typeof phone !== "string" || typeof email !== "string" 
        || curatorId.length === 0 || firstName.length === 0 || lastName.length === 0 
        || phone.length === 0 || email.length === 0){
            throw new Error('Invalid input')
        }
        const c =  await prisma.curator.update({where:{id: curatorId},data:{id: curatorId, firstName: firstName, lastName: lastName, phone: phone, email: email}})
        return c

    } catch (error) {
        console.log(error)
        return null
    }
}