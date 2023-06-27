import Botao from "./Botao";
import CampoTexto from "./CampoTexto";

const Formulario = () => {
  return (
    <>
      <form className="container">
        <div className="container">
          <CampoTexto
            label="MEDICAMENTO"
            campo="texto"
            item="medicamento"
            placeholder="Digite aqui o nome do seu remédio..."
          />

          <div className="texto">
            <CampoTexto label="DOSAGEM" campo="texto" item="dosagem" placeholder="Quantas cápsulas ao dia..." />
            <CampoTexto label="MILIGRAMAS" campo="texto" item="miligramagem" placeholder="Digite a miligramagem..." />
          </div>

          <div className="texto">
            <CampoTexto label="HORÁRIO" campo="texto" item="horario" placeholder="Digite aqui o horário..." />
            <CampoTexto label="HORÁRIO" campo="texto" item="horario" placeholder="Digite aqui o horário..." />
            <CampoTexto label="HORÁRIO" campo="texto" item="horario" placeholder="Digite aqui o horário..." />
          </div>

          <div className="btn-holder p-0.5">
            <Botao botao="CADASTRAR" classe="cadastrar" />
          </div>
        </div>
      </form>
    </>
  )
};

export default Formulario;
