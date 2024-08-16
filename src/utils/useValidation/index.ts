import { confirmPasswordValidator } from './confirmPasswordValidator';
import { validateEmail } from './emailValidator';
import { validatePassword } from './passwordValidator';
import { validateUsername } from './usernameValidator';

export const useValidation = () => ({
  validateEmail,
  validatePassword,
  validateUsername,
  confirmPasswordValidator,
});
