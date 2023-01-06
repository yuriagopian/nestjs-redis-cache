export class TwoFactorAuthSendTokenRequestDTO {
  cellphoneNumber: string;
}

export class TwoFactorAuthConfirmTokenRequestDTO {
  token: string;
  cellphoneNumber: string;
}
