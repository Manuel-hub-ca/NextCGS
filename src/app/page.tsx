import Header from "./components/Header";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function Home() {
  return (
    <>
    <Theme style={{color:'cyan'}}>
    <Header />
    </Theme>

    </>
  );
}