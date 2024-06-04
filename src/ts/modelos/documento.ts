import { TipoDocumento } from "../enumeracoes/TipoDocumento"

export default class Documento {
    private numero: string
    private tipo: TipoDocumento
    private dataExpedicao: Date

    constructor(numero: string, tipo: TipoDocumento, dataExpedicao: Date) {
        this.numero = numero
        this.tipo = tipo
        this.dataExpedicao = dataExpedicao
    }

    public get Numero(){
        return this.numero
    }
    public set Numero(novoNumero: string) {
        this.numero = novoNumero;
    }
    public get Tipo(){
        return this.tipo
    }
    public set Tipo(novoTipo: TipoDocumento) {
        this.tipo = novoTipo;
    }
    public get DataExpedicao(){
        return this.dataExpedicao
    }
    public set DataExpedicao(novaDataExpedicao: Date) {
        this.dataExpedicao = novaDataExpedicao;
    }
    
}