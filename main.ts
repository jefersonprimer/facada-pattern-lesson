import { Cliente } from './models/cliente';
import { Facada } from './facada/cliente-facada.ts'

const jeferson = new Cliente(
  "jeferson primer",
  "jefersonprimer",
  "jefersonprimer@gmail.com"
);

const ClienteFacada = new Facada.ClienteFacada(jeferson);
ClienteFacada.removeConta();
