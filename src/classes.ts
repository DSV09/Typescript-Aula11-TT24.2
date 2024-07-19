//Interface em funções
interface funcaoMatematica {
  (x: number, y: number): number;
}

const Subtracao: funcaoMatematica = (numero1, numero2) => numero1 - numero2;

//Modificadores de acesso
class Pessoa {
  private nome: string;
  readonly idade: number;
  protected cpf: string;

  constructor(nome: string, idade: number, cpf: string) {
    //Declara como o objeto da classe deve ser criado
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }
  setNome(nome: string) {
    //Permite alterar a propriedade nome
    this.nome = nome;
  }
}

class PessoaJuridica extends Pessoa {
  //Classe filha de Pessoa que herda todos métodos e atributos da classe mãe
  cnpj: string;

  constructor(nome: string, idade: number, cpf: string, cnpj: string) {
    super(nome, idade, cpf); //Chama o construtor da classe mãe passando os parâmetros recebidos
    this.cnpj = cnpj;
  }
  setCpf(cpf: string) {
    //Altera cpf da classe Pessoa mas apenas para pessoas da classe PessoaJuridica
    this.cpf = cpf;
  }
}
const pessoa1 = new PessoaJuridica( //Criar uma nova instância de objeto da classe PessoaJuridica
  'João',
  13,
  '123.456.678-10',
  '30.213.456.0001-5'
);

pessoa1.setCpf('312.654.432-12');
console.log(pessoa1.idade);
