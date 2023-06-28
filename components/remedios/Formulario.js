import { app, database } from '@services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';
import Botao from '@components/Botao';
import CampoTexto from '../CampoTexto';

const dbInstance = collection(database, 'remedios');

const Formulario = () => {
  const [medicamento, setMedicamento] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [miligramagem, setMiligramagem] = useState('');
  const [horario, setHorario] = useState([]);

  return (
    <>
      <form className="container">
        <div className="container">
          <CampoTexto
            label="MEDICAMENTO"
            campo="texto"
            item="medicamento"
            placeholder="Digite aqui o nome do seu remédio..."
            onChange={handleChangeMedicamento}
            value={medicamento}
          />

          <div className="texto">
            <CampoTexto
              label="DOSAGEM"
              campo="texto"
              item="dosagem"
              placeholder="Quantas cápsulas ao dia..."
              onChange={handleChangeDosagem}
              value={dosagem}
            />
            <CampoTexto
              label="MILIGRAMAS"
              campo="texto"
              item="miligramagem"
              placeholder="Digite a miligramagem..."
              onChange={handleChangeMiligramagem}
              value={miligramagem}
            />
          </div>

          <div className="texto">
            <CampoTexto
              label="HORÁRIO"
              campo="texto"
              item="horario"
              placeholder="Digite aqui o horário..."
              onChange={handleChangeHorario}
              value={horario}
            />
            <CampoTexto
              label="HORÁRIO"
              campo="texto"
              item="horario"
              placeholder="Digite aqui o horário..."
              onChange={handleChangeHorario}
              value={horario}
            />
            <CampoTexto
              label="HORÁRIO"
              campo="texto"
              item="horario"
              placeholder="Digite aqui o horário..."
              onChange={handleChangeHorario}
              value={horario}
            />
          </div>

          <div className="btn-holder p-0.5">
            <Botao botao="CADASTRAR" classe="cadastrar" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulario;
