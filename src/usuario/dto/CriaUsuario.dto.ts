import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O email deve ser válido' })
  @EmailEhUnico({ message: 'O email já está em uso' })
  email: string;

  @MinLength(6, { message: 'A senha deve conter pelo menos 6 caracteres' })
  senha: string;
}
