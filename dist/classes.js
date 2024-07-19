"use strict";
const Subtracao = (numero1, numero2) => numero1 - numero2;
//Modificadores de acesso
class Pessoa {
    constructor(nome, idade, cpf) {
        //Declara como o objeto da classe deve ser criado
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    setNome(nome) {
        //Permite alterar a propriedade nome
        this.nome = nome;
    }
}
class PessoaJuridica extends Pessoa {
    constructor(nome, idade, cpf, cnpj) {
        super(nome, idade, cpf); //Chama o construtor da classe mãe passando os parâmetros recebidos
        this.cnpj = cnpj;
    }
    setCpf(cpf) {
        //Altera cpf da classe Pessoa mas apenas para pessoas da classe PessoaJuridica
        this.cpf = cpf;
    }
}
const pessoa1 = new PessoaJuridica(//Criar uma nova instância de objeto da classe PessoaJuridica
'João', 13, '123.456.678-10', '30.213.456.0001-5');
pessoa1.setCpf('312.654.432-12');
console.log(pessoa1.idade);
