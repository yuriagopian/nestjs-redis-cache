function pad(str, length) {
  const resto = length - String(str).length;
  return '0'.repeat(Number(resto) > 0 ? Number(resto) : 0) + str;
}

export function generateVerificationId(): string {
  const maxValue = 9999;
  const randomNumber = Math.floor(Math.random() * maxValue);
  const verificationCode = pad(randomNumber, 4);

  return verificationCode;
}
