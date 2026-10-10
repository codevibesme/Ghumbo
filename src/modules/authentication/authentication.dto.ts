import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty()
  email: string | null;

  @ApiProperty()
  phone: string | null;

  @ApiProperty()
  password: string;
}

export class SignUpDto extends SignInDto {
  @ApiProperty()
  name: string;
}

export class AuthSuccessResponseDto {
  @ApiProperty()
  refreshToken: string;

  @ApiProperty()
  accessToken: string;
}

export class AuthRefreshReqDto {
  @ApiProperty()
  refreshToken: string;
}
