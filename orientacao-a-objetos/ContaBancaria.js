class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    // Sempre que um valor for ter um get e um set a gente utiliza um anderline na frente pra que a gente possa utilzar no valor o nome do get e do seter
    this._saldo = 0;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Saque negado; saldo insuficiente!");
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  get saldo() {
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operação negada.";
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);
