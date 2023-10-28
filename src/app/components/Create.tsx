'use client'
import React,{ChangeEvent} from 'react';
import Input from '@/app/components/Input';
import GenericForm from '@/app/components/GenericForm';
import { useRouter } from 'next/navigation';

interface Entity {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  entityType: string 
}

interface CreateProps {
    entityType: string; // entityType is a property of CreateProps
  }

export default function Create({entityType} :CreateProps) {
  const router = useRouter()
  const initialData = {
    firstName:'',
    lastName: '',
    phone: '',
    email: '',
    entityType:''
  };

  const validateData = async (data: Entity) => {
    return Object.values(data).every((value) => value !== '')
  };

  const onSubmitData = async (data: Entity) => {
    data.entityType = entityType
    console.log(entityType)
    console.log('hello')
    // API call to submit data.
    const r = await fetch("/api/Create",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data)
    })


    if(r.status === 200 && entityType === "Curator"){
      router.push('/Curators')
    }else{
      router.push('/Artists')
    }

  };

  return (
    <GenericForm
      initialData={initialData}
      onSubmitData={onSubmitData}
      validateData={validateData}
      formFields={({ handleChange, data }: { handleChange: (e: ChangeEvent<HTMLInputElement>) => void, data: Entity }) => (
        <>
          <Input
            placeholder="enter artist firstname"
            top={80}
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          >
            First Name
          </Input>
          <Input
            placeholder="enter artist lastname"
            top={162}
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          >
            Last Name
          </Input>
          <Input
            placeholder="enter artist phone number"
            top={242}
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          >
            Phone
          </Input>
          <Input
            placeholder="enter artist email"
            top={322}
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
          >
            Email
          </Input>
        </>
      )}
    />
  );
}


