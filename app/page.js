import Link from 'next/link';
import Botao from '@components/Botao';

// https://www.freecodecamp.org/news/nextjs-firebase-tutorial-build-an-evernote-clone/
const Home = () => {
  return (
    <>
      <div className="content">
        <h1>REMEDIE</h1>
        <div className="content-holder">
          <h3 id="texto-home">
            Este site foi criado com o intuito de ser uma agenda de remédios diária, consultas médicas e exames para que
            você nunca mais esqueça nenhuma data.
          </h3>
          <div alt="remedios" className="imagem-home"></div>
        </div>

        <div className="btn-holder">
          <Link href="/remedios">
            <Botao botao="REMEDIOS" classe="botaoHome" />
          </Link>
          <Link href="/consultas">
            <Botao botao="CONSULTAS" classe="botaoHome" />
          </Link>
          <Link href="/exames">
            <Botao botao="EXAMES" classe="botaoHome" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
