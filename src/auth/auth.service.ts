import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

  // async signIn(username: string, pass: string): Promise<any> {
  // 	const user = await this.usuarioService.//findOne(username)
  // 	if (user?.) {

  // 	}
  // }
}
