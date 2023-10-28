'use client'
import React, { useEffect, useState } from 'react';
import Create from '@/app/components/Create';


export default function Page() {

  const [entityType, setEntityType] = useState('') 
  // const entityType = router.query.entityType as string

  useEffect(() =>{
      const currentUrl =  window.location.href
      if(currentUrl.includes('Artist')){
        setEntityType('Artist')
      }
  },
  [])

  return (
    <Create entityType={entityType}/>
  )
}


// const router = useRouter()
// const [formData, setFormData] = useState<FormData>({
//   firstName:'',
//   lastName: '',
//   phone: '',
//   email: ''
// })

// const [isValidData, setIsValidData] = useState(true)

// const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
//     // onChange: React.ChangeEventHandler<HTMLInputElement>
//     const {name, value} = e.target
//     setFormData(
//       (prevData) =>({
//         ...prevData, [name]: value
//       })
//     )
// }

//   const handleSubmit = async (e: FormEvent) =>{

//     e.preventDefault()
    
//     if(formData.firstName !== '' && formData.lastName !== '' && formData.phone !== '' && formData.email !== ''){
//       try {
//         const response = await fetch('/api/createArtist', {
//           method:'POST',
//           headers: {
//             'Content-Type':'application/json'
//           },
//           body: JSON.stringify(formData)
//         })
//         const data: FormData = await response.json()
//         console.log('Success:', data)
//       } catch (error) {
//         console.error("Error creating artist", error)
//       }
  
//       finally{
//         router.push('/Artists')
//       }

//     }else{
//       setIsValidData(false)
//     }
//   }

//   return (
//     <div className="flex flex-col w-11/12 h-screen mx-auto">
//       <form onSubmit={handleSubmit} className="w-full h-1/2 mx-auto">
//         <h2 className=" mt-3 text-2xl text-white">Create Artist</h2>

//         <Input
//           placeholder="enter artist firstname"
//           top={80}
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         >
//           First Name
//         </Input>

//         <Input
//           placeholder="enter artist lastname"
//           top={162}
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         >
//           Last Name
//         </Input>
//         <Input
//           placeholder="enter artist phone number"
//           top={242}
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         >
//           Phone
//         </Input>

//         <Input
//           placeholder="enter artist email"
//           top={322}
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         >
//           Email
//         </Input>

//         <button
//           className=" fixed bottom-10 right-8 w-1/4 h-12 hover:bg-slate-50 bg-slate-200 rounded-sm"
//           type="submit"
//         >
//           Create Artist
//         </button>
//         {!isValidData && <p className='fixed bottom-10 left-8'>Fill all the fields required</p>}
//       </form>
//     </div>
  // );

