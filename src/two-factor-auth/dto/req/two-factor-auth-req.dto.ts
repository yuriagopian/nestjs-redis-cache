import { IsNotEmpty, IsString } from 'class-validator';

export class TwoFactorAuthSendTokenRequestDTO {
  cellphoneNumber: string;
}

export class TwoFactorAuthConfirmTokenRequestDTO {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsString()
  cellphoneNumber: string;
}
