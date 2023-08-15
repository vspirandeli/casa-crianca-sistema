import { ReactElement } from 'react';

import { SignInFormContainer } from './components/Form/Container';
import { SignInImageSide } from './components/Image';

export default function SignIn(): ReactElement {
  return (
    <div className="flex min-h-full flex-1">
      <SignInFormContainer />

      <SignInImageSide />
    </div>
  );
}
