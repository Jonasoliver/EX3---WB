import { useState } from "react";
import Seletor from "../../Seletor/seletor";

function ListagemCliente() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [opcaoGenero, setOpcaoGenero] = useState("");

  function handleOptionChange(opcaoSelecionada: string) {
    setOpcaoSelecionada(opcaoSelecionada);
    console.log('opcao escolhida', opcaoSelecionada)
    setOpcaoGenero('');
  }

  function handleGenderChange(opcaoSelecionada: string) {
    console.log("Opção de gênero selecionada:", opcaoSelecionada);
    setOpcaoGenero(opcaoSelecionada);
  }

  const options = [
    { value: "1", label: "Top 10 clientes que mais consumiram (quantidade)" },
    { value: "2", label: "Top 10 clientes por gênero" },
    { value: "3", label: "Top 10 clientes que menos consumiram" },
    { value: "4", label: "Top 5 clientes que mais consumiram (valor)" },
  ];

  const genderOptions = [
          { value: "Masculino", label: "Masculino" },
          { value: "Feminino", label: "Feminino" },
          { value: "Outros", label: "Outros" },
        ];
  let content;

  switch (opcaoSelecionada) {
    case "1":
      content = (
        <div className="listagem-card">
          <span className="listagem-titulo">Top 10 clientes que mais consumiram (quantidade)</span>
          <ul>
            <li>Exemplo: Cliente 1 - 30 itens</li>
            <li>Exemplo: Cliente 2 - 25 itens</li>
          </ul>
        </div>
      );
      break;
    case "2":
      content = (
        <div>
          <Seletor opcoes={genderOptions} onChange={handleGenderChange} />
          {opcaoGenero && (
            <div className="listagem-card">
              <span className="listagem-titulo">Top 10 clientes do gênero {opcaoGenero}</span>
              <ul>
                <li>Exemplo: Cliente 1 ({opcaoGenero})</li>
                <li>Exemplo: Cliente 2 ({opcaoGenero})</li>
              </ul>
            </div>
          )}
        </div>
      );
      break;
    case "3":
      content = (
        <div className="listagem-card">
          <span className="listagem-titulo">Top 10 clientes que menos consumiram</span>
          <ul>
            <li>Exemplo: Cliente 1 - 2 itens</li>
            <li>Exemplo: Cliente 2 - 3 itens</li>
          </ul>
        </div>
      );
      break;
    case "4":
      content = (
        <div className="listagem-card">
          <span className="listagem-titulo">Top 5 clientes que mais consumiram (valor)</span>
          <ul>
            <li>Exemplo: Cliente 1 - R$ 800</li>
            <li>Exemplo: Cliente 2 - R$ 600</li>
          </ul>
        </div>
      );
      break;
    default:
      content = null;
  }

  return (
    <div>
      <Seletor opcoes={options} onChange={handleOptionChange} />
      {content}
    </div>
  );
}

export default ListagemCliente
