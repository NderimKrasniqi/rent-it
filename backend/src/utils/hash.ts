import bcrypt from 'bcrypt';

export async function createHash(password: string) {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
}
export async function compareHash(
  storedPassword: string,
  suppliedPassword: string
) {
  return bcrypt.compare(suppliedPassword, storedPassword);
}
