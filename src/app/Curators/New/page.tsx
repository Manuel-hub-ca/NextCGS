'use client'
import React,{ useEffect , useState} from 'react';
import Create from '@/app/components/Create';


export default function Page() {
  const [entityType, setEntityType] = useState('')
  useEffect(() => {
    // Check if window exists (client-side)
    if (typeof window !== 'undefined') {
      const currentURL = window.location.href;
      console.log('Current URL:', currentURL);
      if(currentURL.includes('Curators')){
        setEntityType('Curator')
      }
      console.log('Updated EntityType:', entityType);
    }

  }, [entityType]);

  // useEffect(() => {
  //   // Log the updated entityType
  //   console.log('Updated EntityType:', entityType);
  // }, [entityType]);
  return (
    <Create entityType={entityType}/>
  )
}