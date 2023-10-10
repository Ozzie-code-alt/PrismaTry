import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
 // this right here will allow us to  use the prisma built in function or annotations
// this is more of like a generator
// "prisma.user" user here represents our user table
// NOte almost everything in prisma is Asynchrounous

async function main() {
    // some block of code here 
   const user = await prisma.user.create({data: {name: "Justin"}})
   const finMany = await prisma.user.findMany()
   console.log(user)
   console.log(finMany)

   
}


main()

    .catch(e =>{
      console.error(e.message);
        
    })
    .finally(async()=>{
        await prisma.$disconnect()
    })