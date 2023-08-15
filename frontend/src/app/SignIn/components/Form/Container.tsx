import { SignInForm } from './Form';
import { SignInFormHeader } from './Header';

export function SignInFormContainer() {
  return (
    <aside className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <SignInFormHeader />

        <div className="mt-10" />

        <SignInForm />
      </div>
    </aside>
  );
}
