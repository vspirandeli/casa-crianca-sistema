export function SignInFormHeader() {
  return (
    <header className="sm:w-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-28 w-auto mx-auto lg:ml-0"
        src="images/logo.webp"
        alt="logo da casa da criança"
      />

      <h2
        className="
        mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900
        dark:text-gray-100"
      >
        Faça login
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
        Sistema de gestão de recebíveis exclusivo para funcionários da Casa da
        Criança de Pederneiras.
      </p>
    </header>
  );
}
