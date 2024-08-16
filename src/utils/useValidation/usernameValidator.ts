export const validateUsername = async (username: string): Promise<void> => {
  const minLength = 3;
  const maxLength = 20;
  const usernameRegex = /^[a-zA-Z0-9_а-яА-ЯёЁ]+$/;

  if (username.length < minLength || username.length > maxLength) {
    throw new Error(
      `Username must be between ${minLength} and ${maxLength} characters long.`,
    );
  }
  if (!usernameRegex.test(username)) {
    throw new Error(
      'Имя пользователя может содержать только буквы, цифры и символы подчеркивания.',
    );
  }
};
