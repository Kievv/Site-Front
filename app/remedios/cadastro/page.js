'use client';
import Link from 'next/link';
import Formulario from '@components/remedios/Formulario';
import Botao from '@components/Botao';

const CadastrarRemedio = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Cadastre seus remédios no mural</h1>
        <h3>Basta preencher os campos e clicar em "Cadastrar"</h3>
        <Formulario />

        <div className="btn-holder">
          <Link href="/remedios">
            <Botao botao="VOLTAR" classe="voltar" />
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

export default CadastrarRemedio;
