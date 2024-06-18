import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitularPorDependente extends Processo {
  private clientes: Cliente[];
  private impressor!: Impressor;

  constructor() {
    super();
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }

  processar(): void {
    console.clear();
    console.log("Iniciando a listagem do titular por dependente...");

    let nomeDependente = this.entrada.receberTexto(
      "Digite o nome do dependente: "
    );

    let titular = this.clientes.find((cliente) =>
      cliente.Dependentes.some((dependente) => dependente.Nome === nomeDependente)
    );

    if (titular) {
      this.impressor = new ImpressaorCliente(titular);
      console.log(this.impressor.imprimir());
    } else {
      console.log("Dependente não encontrado ou não possui titular.");
    }
  }
}
