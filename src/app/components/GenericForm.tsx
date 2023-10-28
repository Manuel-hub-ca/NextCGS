import React, { FormEvent, useState, ChangeEvent } from 'react';
import redirect from 'next/router';

interface Props<T> {
  initialData: T;
  onSubmitData: (data: T) => Promise<void>;
  validateData: (data: T) => Promise<boolean>;
  formFields: (props: { handleChange: (e: ChangeEvent<HTMLInputElement>) => void, data: T }) => React.ReactNode;
}

function GenericForm<T>({ initialData, onSubmitData, validateData, formFields }: Props<T>) {
  // const router = useRouter();
  const [data, setData] = useState<T>(initialData);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const valid = await validateData(data); // Calculate validity
    setIsValid(valid); // Set validity state
    // setIsValid(validateData(data));
    if (isValid) {
      try {
        await onSubmitData(data);
        // redirect('localhost:3000/Curators/')
        // router.push('/Curators')

      } catch (error) {
        console.log("Error creting curator:", error)
      }

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields({ handleChange, data })}
      <button type="submit">Submit</button>
      {/* {!isValid && <p>Please fill out all required fields.</p>} */}
    </form>
  );
}

export default GenericForm;
