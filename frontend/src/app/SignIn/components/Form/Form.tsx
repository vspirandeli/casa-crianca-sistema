'use client';

import { EnvelopeIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/20/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Login } from './interface';
import { loginSchema } from './schema';
import { ButtonWithLoading } from '@shared/components/Button/ButtonWithLoading';
import { CustomInput } from '@shared/components/CustomInput';

import { useLayout } from '@hooks/useLayout';

const arr = [1, 2, 3, 4, 5];

// TODO: Implementar o carregamento em localStorage para lembrar o usuário
export function SignInForm() {
  const { isLoading, handleLoading } = useLayout();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: Login) => {
    handleLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 5000));
    alert(JSON.stringify(data, null, 2));
    handleLoading(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      handleSubmit(onSubmit);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={handleKeyDown}
    >
      <CustomInput.Root>
        <CustomInput.Label
          htmlFor="email"
          hasError={Boolean(errors.email?.message)}
          isLoading={isLoading}
        >
          E-mail
        </CustomInput.Label>

        <div className="relative mt-2 rounded-md shadow-sm">
          <CustomInput.Icon
            hasError={Boolean(errors.email?.message)}
            position="left"
            icon={EnvelopeIcon}
            isLoading={isLoading}
            className="pointer-events-none"
          />

          <CustomInput.Input
            disabled={isLoading}
            hasError={Boolean(errors.email?.message)}
            {...register('email')}
            id="email"
            isRequired
            placeholder="Digite seu e-mail cadastrado"
            type="email"
            className="pl-10"
          />
        </div>

        <CustomInput.ErrorMessage message={errors.email?.message} />
      </CustomInput.Root>

      <CustomInput.Root>
        <CustomInput.Label
          htmlFor="password"
          hasError={Boolean(errors.password?.message)}
          isLoading={isLoading}
        >
          Senha
        </CustomInput.Label>

        <div className="relative mt-2 rounded-md shadow-sm">
          <CustomInput.Input
            disabled={isLoading}
            hasError={Boolean(errors.password?.message)}
            {...register('password')}
            id="password"
            isRequired
            placeholder="Digite sua senha"
            type={showPassword ? 'text' : 'password'}
          />

          <CustomInput.Icon
            isLoading={isLoading}
            action={handleShowPassword}
            hasError={Boolean(errors.password?.message)}
            position="right"
            icon={showPassword ? EyeIcon : EyeSlashIcon}
            className="cursor-pointer"
          />
        </div>

        <CustomInput.ErrorMessage message={errors.password?.message} />
      </CustomInput.Root>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <CustomInput.Input
            disabled={isLoading}
            id="rememberMe"
            type="checkbox"
            {...register('rememberMe')}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600
            focus:ring-indigo-600
            disabled:bg-slate-200 disabled:cursor-not-allowed"
          />

          <CustomInput.Label
            hasError={false}
            isLoading={isLoading}
            className="ml-3"
            htmlFor="rememberMe"
          >
            Lembrar
          </CustomInput.Label>
        </div>

        <div className="text-sm leading-6">
          <a
            href="google.com.br"
            className="
              font-semibold text-indigo-600 hover:text-indigo-500
              dark:text-indigo-300 dark:hover:text-indigo-100
              aria-disabled:text-slate-400 aria-disabled:cursor-not-allowed
              aria-disabled:pointer-events-none
            "
            aria-disabled={isLoading}
          >
            Esqueci minha senha
          </a>
        </div>
      </div>

      <div>
        <ButtonWithLoading
          type="submit"
          label="Entrar"
          isLoading={isLoading}
          onLoadingLabel="Efetuando login..."
        />
      </div>
    </form>
  );
}
