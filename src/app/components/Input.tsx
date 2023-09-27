interface MyInputProps {
  children: React.ReactNode;
  placeholder: string;
  top: number;
  type: string;
  name: string;
}

export default function Input({
  children,
  placeholder,
  top,
  type,
  name,
}: MyInputProps) {
  return (
    <div className="mt-5 mx-auto 11/12">
      <p
        className=" absolute text-slate-400 text-xs bg-slate-900 px-2 z-50 translate-x-[8px] translate-y-[-8px]"
        style={{ top: top }}
      >
        {children}
      </p>
      <input
        className=" absolute text-white  rounded-md bg-transparent border-2 border-red-200 focus:outline-none px-2 w-11/12 leading-10"
        placeholder={placeholder}
        style={{ top: top }}
        type={type}
        name={name}
      />
    </div>
  );
}
