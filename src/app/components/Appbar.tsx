import ArtPieces from '../ArtPieces/page';
import SigninButton from './SigningButton';

const Appbar = () => {
  return (
    <header>
      <SigninButton>
        <ArtPieces />
      </SigninButton>
    </header>
  );
};

export default Appbar;
