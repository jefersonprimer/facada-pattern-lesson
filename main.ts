import { Cliente } from './models/cliente';
import { ClienteAvatar } from './models/cliente-avatar';
import { ClienteDocumentos } from './models/cliente-documentos';
import { ClienteHistoricoAcesso } from './models/cliente-historico-acesso';
import { ClienteService } from './models/cliente-service';
import { ClienteEmail } from './models/cliente-email';

const jeferson = new Cliente(
  "jeferson primer",
  "jefersonprimer",
  "jefersonpriimer@gmail.com"
);

const clienteAvatar = new ClienteAvatar(jeferson);
const clienteDocumentos = new ClienteDocumentos(jeferson);
const clienteHistoricoAcesso = new ClienteHistoricoAcesso(jeferson);
const clienteService = new ClienteService(jeferson);
const clienteEmail = new ClienteEmail(jeferson);

clienteAvatar.remove();
clienteDocumentos.delete();
clienteHistoricoAcesso.remove();
clienteService.delete();
clienteEmail.envioRemocaoConta();
  