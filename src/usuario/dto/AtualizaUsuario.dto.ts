import {
  IsString,
  IsEmail,
  MinLength,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O email deve ser válido' })
  @EmailEhUnico({ message: 'O email já está em uso' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha deve conter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
