export const confirmPasswordValidator = ({
  getFieldValue,
}: {
  getFieldValue: (name: string) => string;
}) => ({
  validator: async (_: any, value: string) => {
    if (getFieldValue('password') !== value) {
      throw new Error('Password must be the same.');
    }
  },
});
