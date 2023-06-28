import Botao from '@components/Botao';
import Link from 'next/link';
import TabelaRemedio from '@components/remedios/Tabela';

const Remedios = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Seus Remédios do dia</h1>
        <TabelaRemedio
          remedio="Diazepam"
          dose="2 comprimidos"
          miligramas="25mg"
          hor1="12:00"
          hor2="18:00"
          hor3="00:00"
        />
        <div className="btn-holder">
          <Link href="/remedios/cadastro">
            <Botao botao="CADASTRAR" classe="cadastro" />
          </Link>
          <Link href="/remedios/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-remedios"></div>
      </div>
    </>
  );
};

export default Remedios;
