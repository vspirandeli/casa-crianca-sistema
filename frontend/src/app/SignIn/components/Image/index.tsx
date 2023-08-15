export function SignInImageSide() {
  return (
    <aside className="relative hidden w-0 flex-1 lg:block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="images/sign-in/background.webp"
        alt="imagem de crianças centadas, borrado com as cores do arco-íris"
      />
    </aside>
  );
}
