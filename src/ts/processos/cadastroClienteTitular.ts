import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroTelefone from "./cadastrarTelefoneCliente";
import CadastroClienteDependente from "./cadastroClienteDependente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')        
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        this.processo = new CadastroTelefone(cliente)
        this.processo.processar()


        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        let cadastrarDependente = this.entrada.receberConfirmacao("Deseja cadastrar um dependente? (sim/nao)");
        if (cadastrarDependente) {
            this.processo = new CadastroClienteDependente(cliente);
            this.processo.processar();
        }

        console.log('Finalizando o cadastro do cliente...')
    }
}