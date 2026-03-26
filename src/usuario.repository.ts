export class UsuarioRepository {
  private usuarios: any[] = [];

  salvar(usuario: any) {
    this.usuarios.push(usuario);
    console.log('Usuário salvo:', usuario);
  }
}
