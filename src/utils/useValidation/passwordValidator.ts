export const validatePassword = async (password: string): Promise<void> => {
    const minLength = 3;
    // const hasNumber = /\d/;
    // const hasUpperCase = /[A-Z]/;
    // const hasLowerCase = /[a-z]/;
    // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < minLength) {
        throw new Error(`Password must be at least ${minLength} characters long.`);
    }
    // if (!hasNumber.test(password)) {
    //   throw new Error("Password must contain at least one number.");
    // }
    // if (!hasUpperCase.test(password)) {
    //   throw new Error("Password must contain at least one uppercase letter.");
    // }
    // if (!hasLowerCase.test(password)) {
    //   throw new Error("Password must contain at least one lowercase letter.");
    // }
    // if (!hasSpecialChar.test(password)) {
    //   throw new Error("Password must contain at least one special character.");
    // }
};
