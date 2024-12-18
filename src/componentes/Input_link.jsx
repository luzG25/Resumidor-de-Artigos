function Input_link(props) {
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      props.setLink(text); // Coloca o texto da área de transferência no input
      props.resumir();
    } catch (err) {
      console.error("Erro ao acessar a área de transferência: ", err);
    }
  };

  return (
    <div
      className="bg-gray-200 px-3 py-1 flex items-center rounded-lg "
      onKeyDown={(event) => {
        if (event.key === "Enter") props.resumir();
      }}
    >
      {/*Icon */}
      <span
        class="material-icons pr-2 cursor-pointer"
        onClick={() => {
          handlePaste();
        }}
      >
        link
      </span>

      {/*Input sem bordas */}
      <input
        type="url"
        value={props.texto_link}
        className="border-none bg-transparent outline-none w-full"
        placeholder="Colar o link do artigo"
        onChange={(e) => props.setLink(e.target.value)}
        onClick={() => props.setLink("")}
      />

      {/*Icon*/}
      <button
        onClick={props.resumir}
        className="border border-1 border-white rounded-lg px-1 flex items-center justify-center"
      >
        <span class="material-icons">keyboard_return</span>
      </button>
    </div>
  );
}

export default Input_link;
