import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CriaUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  senha: string;
}
