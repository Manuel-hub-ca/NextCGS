'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Header from './Header';
import { useEffect } from 'react';

const SigninButton = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  let colorIndex = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const welcomeText = document.getElementById('welcome-text');
      const colors = ['yellow', 'violet', 'white', 'orange'];
      if (welcomeText) {
        welcomeText.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
      }
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  if (session && session.user) {
    if (session.user.email === 'manueljuliocasanova@gmail.com') {
      return (
        <>
          <div className=" flex justify-between p-6">
            <p className=" inline mr-2" id="welcome-text">
              {'Welcome ' + session.user.name}
            </p>
            <button className="text-red-600" onClick={() => signOut()}>
              SignOut
            </button>
          </div>

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
