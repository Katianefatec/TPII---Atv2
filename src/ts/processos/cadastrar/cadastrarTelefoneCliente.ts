import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class CadastroTelefone extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let continuar = 'sim';
        while (continuar.toLowerCase() === 'sim') {
            console.log('Coletando o telefone...')
            let ddd = this.entrada.receberTexto('Qual o DDD?')
            let numero = this.entrada.receberTexto('Qual o número?')
            let telefone = new Telefone(ddd, numero)
            this.cliente.Telefones.push(telefone)
            continuar = this.entrada.receberTexto('Deseja adicionar outro telefone? (sim/nao)')
        }
    }
}