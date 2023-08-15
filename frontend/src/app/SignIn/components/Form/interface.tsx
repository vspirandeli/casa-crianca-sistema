import * as yup from 'yup';

import { loginSchema } from './schema';

export interface Login extends yup.InferType<typeof loginSchema> {}
