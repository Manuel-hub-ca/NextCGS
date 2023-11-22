import Header from './components/Header';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Providers from './components/Providers';
import Appbar from './components/Appbar';

export default function Home() {
  return (
    <>
      <Theme style={{ color: 'cyan' }}>
      <Providers>
          <Appbar />
        </Providers>
      </Theme>
    </>
  );
}
