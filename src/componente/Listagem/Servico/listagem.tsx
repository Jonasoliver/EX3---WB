import { useState } from "react";
import Seletor from "../../Seletor/seletor";

function ListagemServico() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [opcaoGenero, setOpcaoGenero] = useState("");

  function handleOptionChange(opcaoSelecionada: string) {
    setOpcaoSelecionada(opcaoSelecionada);
    setOpcaoGenero('')
  }

  function handleGenderChange(opcaoGenero: string) {
    setOpcaoGenero(opcaoGenero);
  }

  const opcoes = [
    { value: "1", label: "Serviços mais consumidos (geral)" },
    { value: "2", label: "Serviços mais consumidos por gênero" },
    { value: "3", label: "Top 10 clientes que mais consumiram (quantidade)" },
    { value: "4", label: "Top 10 clientes por gênero" },
    { value: "5", label: "Top 10 clientes que menos consumiram" },
    { value: "6", label: "Top 5 clientes que mais consumiram (valor)" },
  ];
  let content
  const genderOptions = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "Outros", label: "Outros" },
  ];

  switch (opcaoSelecionada) {
    case "1":
      content = (
        <div className="listagem-card">
          <span className="listagem-titulo">Serviços mais consumidos (geral)</span>
          <ul>
            <li>Exemplo: Serviço X</li>
            <li>Exemplo: Serviço Y</li>
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
              <span className="listagem-titulo">Serviços mais consumidos por gênero: {opcaoGenero}</span>
              <ul>
                <li>Exemplo: Serviço A ({opcaoGenero})</li>
                <li>Exemplo: Serviço B ({opcaoGenero})</li>
              </ul>
            </div>
          )}
        </div>
      );
      break;
    case "3":
      content = (
        <div className="listagem-card">
          <span className="listagem-titulo">Top 10 clientes que mais consumiram (quantidade)</span>
          <ul>
            <li>Exemplo: Cliente 1 - 30 serviços</li>
            <li>Exemplo: Cliente 2 - 25 serviços</li>
          </ul>
        </div>
      );
      break;
    case "4":
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
    case "5":
      content = (
        <div className="listagem-card">
          <span className="listagem-titulo">Top 10 clientes que menos consumiram</span>
          <ul>
            <li>Exemplo: Cliente 1 - 2 serviços</li>
            <li>Exemplo: Cliente 2 - 3 serviços</li>
          </ul>
        </div>
      );
      break;
    case "6":
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
    <div className="listagem-container">
      <Seletor opcoes={opcoes} onChange={handleOptionChange} />
      {content}
    </div>
  );
}

export default ListagemServico;
