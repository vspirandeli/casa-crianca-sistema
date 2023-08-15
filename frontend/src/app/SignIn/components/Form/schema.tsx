import * as yup from 'yup';

import { emailValidation } from '@utils/validation/email';

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('E-mail inválido')
    .required('O e-mail obrigatório')
    .test('email', 'E-mail inválido', (email) => emailValidation(email)),

  password: yup
    .string()
    .required('A senha obrigatória')
    .min(6, 'Mínimo de 6 caracteres'),

  rememberMe: yup.boolean().required(),
});
