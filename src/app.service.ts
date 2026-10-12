
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    { id: 1, nombre: 'Carlos' },
    { id: 2, nombre: 'Maria' },
  ];

  getHello(): string {
    return 'API de usuarios funcionando';
  }

  getuser(id: number) {
    const user = this.users.find(u => u.id === id);

    if (!user) {
      throw new NotFoundException('el usuario no existe');
    }

    return user;
  }

  crear() {
    const nuevoUsuario = {
      id: this.users.length
        ? Math.max(...this.users.map(u => u.id)) + 1
        : 1,
      nombre: 'usuario nuevo',
    };

    this.users.push(nuevoUsuario);
    return nuevoUsuario;
  }

  putunuser(id: number) {
    const user = this.getuser(id);
    user.nombre = 'eL usuario ha sido modificado';
    return user;
  }

  patchuser(id: number) {
    const user = this.getuser(id);
    user.nombre = 'el nombre del usuario ha sido modificado';
    return user;
  }

  deleteuser(id: number) {
    this.getuser(id);
    this.users = this.users.filter(u => u.id !== id);

    return {
      mensaje: 'el usuario ha sido eliminado',
    };
  }
}