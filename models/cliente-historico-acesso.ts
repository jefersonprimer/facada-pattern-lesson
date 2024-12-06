import { Cliente } from '../models/cliente.ts';

export class ClienteHistoricoAcesso {
  constructor(private cliente: Cliente) {}

  public remove(): boolean {
    console.log("Histórico de accesso de " + this.cliente.nome + " removido com sucesso!");
    return true;
  }
}
