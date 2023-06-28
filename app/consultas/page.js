import Link from 'next/link';
import Botao from '@components/Botao';
import Tabela from '@components/consultas/Tabela';

const Consultas = () => {
  return (
    <>
      <div className="layout-consultas">
        <h1>Suas consultas do dia</h1>
        <Tabela hospital="DAHER" medico="Giuseppe Camolli" horario="14:50" />
        <div className="btn-holder">
          <Link href="/consultas/cadastro">
            <Botao botao="CADASTRAR" classe="cadastro" />
          </Link>
          <Link href="/consultas/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-consultas"></div>
      </div>
    </>
  );
};

export default Consultas;
