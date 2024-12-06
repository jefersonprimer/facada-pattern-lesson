import { Cliente } from '../models/cliente';

import { ClienteAvatar } from '../models/cliente-avatar';
import { ClienteDocumentos } from '../models/cliente-documentos';
import { ClienteEmail } from '../models/cliente-email';
import { ClienteHistoricoAcesso } from '../models/cliente-historico-acesso';
import { ClienteService } from '../models/cliente-service';

export module Facada {

  export class ClienteFacada {
    private clienteAvatar: ClienteAvatar;
    private clienteDocumentos: ClienteDocumentos;
    private clienteHistoricoAcesso: ClienteHistoricoAcesso;
    private clienteService: ClienteService;
    private clienteEmail: ClienteEmail;

    constructor(private cliente: Cliente) {
      this.clienteAvatar = new ClienteAvatar(cliente);
      this.clienteDocumentos = new ClienteDocumentos(cliente);
      this.clienteHistoricoAcesso = new ClienteHistoricoAcesso(cliente);
      this.clienteService = new ClienteService(cliente);
      this.clienteEmail = new ClienteEmail(cliente);
  }

  removeConta() {
    this.clienteAvatar.remove();
    this.clienteDocumentos.delete();
    this.clienteHistoricoAcesso.remove();
    this.clienteService.delete();
    this.clienteEmail.envioRemocaoConta();
  
  }
}