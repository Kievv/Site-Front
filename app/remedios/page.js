import Botao from '@components/Botao';
import Link from 'next/link';
import TabelaRemedio from '@components/remedios/Tabela';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Remedios = () => {
  const auth = getAuth();
  const userId = auth.currentUser.uid;

  return (
    <>
      <div className="layout-remedios">
        <h1>Seus Remédios do dia</h1>
        <TabelaRemedio userId={userId} />
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
