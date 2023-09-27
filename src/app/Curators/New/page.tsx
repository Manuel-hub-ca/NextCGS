import prisma from "@/db";
import { redirect } from "next/navigation";
import Input from "@/app/components/Input";

async function createCurator(data: FormData) {
  "use server";
  const firstName = data.get("fN")?.valueOf();
  const lastName = data.get("lN")?.valueOf();
  const phone = data.get("phone")?.valueOf();
  const email = data.get("email")?.valueOf();

  if (
    typeof firstName !== "string" ||
    firstName.length === 0 ||
    typeof lastName !== "string" ||
    lastName.length === 0 ||
    typeof phone !== "string" ||
    phone.length === 0 ||
    typeof email !== "string" ||
    email.length === 0
  ) {
    throw new Error("Invalid Input");
  }

  console.log("curators new");
  await prisma.curator.create({
    data: {
      firstName,
      lastName,
      phone,
      email,
    },
  });
  redirect("/Curators");
}

export default function Page() {
  return (
    <div className="flex flex-col w-11/12 h-screen mx-auto">
      <form action={createCurator} className="w-full h-1/2 mx-auto">
        <h2 className=" mt-3 text-2xl text-white">Create Curator</h2>
        <Input
          placeholder="enter curator firstname"
          top={80}
          type="text"
          name="fN"
        >
          First Name
        </Input>
        <Input
          placeholder="enter curator lastname"
          top={162}
          type="text"
          name="lN"
        >
          Last Name
        </Input>
        <Input
          placeholder="enter curator phone number"
          top={242}
          type="text"
          name="phone"
        >
          Phone
        </Input>

        <Input
          placeholder="enter curator email"
          top={322}
          type="text"
          name="email"
        >
          Email
        </Input>

        <button
          className=" fixed bottom-10 right-8 w-1/4 h-12 hover:bg-slate-50 bg-slate-200 rounded-sm"
          type="submit"
        >
          Create Curator
        </button>
      </form>
    </div>
  );
}
