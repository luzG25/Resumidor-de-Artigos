function Resultados(props) {
  let resultado = props.resultado.split("\n");

  return (
    <div className="mx-auto">
      <p className="mb-2 text-lg font-semibold text-gray-500">
        Este é o resultado do <span className="text-blue-500">Resumo</span>
      </p>
      <div className="text-sm  bg-gray-100 p-3 rounded-lg ">
        {resultado.map((paraf, key) => (
          <p key={key}>{paraf}</p>
        ))}
      </div>
    </div>
  );
}

export default Resultados;
