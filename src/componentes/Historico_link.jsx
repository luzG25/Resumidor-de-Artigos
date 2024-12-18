function Historico_link(props) {
  function verLink() {
    props.setLink(props.link);
    props.setResultado(props.resultado);
  }

  const handleCopy = () => {
    const textToCopy = props.link;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Texto copiado com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao copiar o texto: ", err);
      });
  };

  return (
    <div className="mt-3 bg-gray-200 py-2 rounded-md flex items-center hover:bg-gray-300 hover:border-gray-500 hover:shadow-lg">
      {/*Icon button */}
      <div
        className="bg-gray-100  rounded-full ml-3  cursor-pointer "
        onClick={() => {
          handleCopy();
        }}
      >
        <span className="material-icons text-sm  ">content_copy</span>
      </div>

      {/*Link */}
      <div
        className="text-sm truncate px-2 text-blue-400 font-bold italic cursor-pointer transition-all "
        onClick={() => {
          verLink();
        }}
      >
        {props.link}
      </div>
    </div>
  );
}

export default Historico_link;
