export class TwoFactorAuthSendTokenResponseDTO {
  verificationCode: string;
  cellphoneNumber: string;
}

export class TwoFactorAuthConfirmTokenResponseDTO {
  status: string;
}
