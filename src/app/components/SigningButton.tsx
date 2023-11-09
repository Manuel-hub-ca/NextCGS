'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Header from './Header';

const SigninButton = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  if (session && session.user) {
    if (session.user.email === 'manueljuliocasanova@gmail.com') {
      return (
        <>
          <p>{session.user.name}</p>
          <button className="text-red-600" onClick={() => signOut()}>
            SignOut
          </button>
          <Header />
        </>
      );
    }
  }

  return (
    <>
      <button className="text-green-600" onClick={() => signIn()}>
        SignIn
      </button>
      {children}
    </>
  );
};

export default SigninButton;
