const CampoTexto = (props) => {
  return (
    <>
      <div className="container">
        <label className={`campo-${props.campo}`}>
          {props.label}
          <input
            type="text"
            name={props.item}
            id={props.item}
            className={props.campo}
            placeholder={props.placeholder}
          />
        </label>
      </div>
    </>
  );
};

export default CampoTexto;
