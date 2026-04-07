import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuidv4 } from 'uuid';
import { ListaUsuarioDto } from './dto/ListaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDto) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.id = uuidv4();

    this.usuarioRepository.salvar(usuarioEntity);
    return {
      usuario: new ListaUsuarioDto(usuarioEntity.id, usuarioEntity.nome),
      message: 'Usuário criado com sucesso',
    };
  }

  @Get()
  async listUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.listar();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDto(usuario.id, usuario.nome),
    );
    return usuariosLista;
  }
}
