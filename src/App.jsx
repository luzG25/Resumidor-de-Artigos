import { useEffect, useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import Input_link from "./componentes/Input_link";
import Resultados from "./componentes/Resultados";
import Historico_link from "./componentes/Historico_link";
import Error from "./componentes/Error";
import Loading from "./componentes/Loading";

function App() {
  const [historico, setHistorico] = useState([]);

  const [link, setLink] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  //obter historicos dos links
  useEffect(() => {
    const hist = JSON.parse(localStorage.getItem("historico_links"));
    if (hist) setHistorico(hist);
  }, []);

  //atualizar dados do historico
  useEffect(() => {
    if (historico.length > 0) {
      localStorage.setItem("historico_links", JSON.stringify(historico));
    }
  }, [historico]);

  //funcao para quando é clicado no butao
  function resumir() {
    if (link.trim()) {
      fetchResumo(link);
    }
  }

  async function fetchResumo(articleURL) {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
      articleURL
    )}&lang=pt&engine=2`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d7cd15b0c0msh6f2dc71a55933d5p141c52jsnfd80a76698ac",
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    setLoading(true);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (response.ok) {
        setResultado(result.summary);
        setHistorico([{ link, resultado: result.summary }, ...historico]);
      } else {
        if (response.status === 422) setErro("Unprocessable Content");
        else if (response.status == 429) setErro("Too Many Requests");
        else setErro("Erro: ", response.statusText);
        setResultado("");
      }
    } catch (error) {
      console.error(error);
      setErro(error.toString());
      setResultado("");
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  }

  return (
    <>
      <Header />
      <div className=" mx-auto justify-center  md:px-48  mb-16">
        <div className=" container mt-20   text-center">
          <div className="text-5xl font-bold mb-2">
            <h1>Faça Resumo de Artigos com</h1>
            <h1 className="text-orange-500">API de OpenAI</h1>
          </div>

          <p className="text-gray-500 p-6">
            Esta é um ferramenta para trabalhar com artigos e que pode ser usado
            para transformar artigos longos num resumo claro e conciso
          </p>
        </div>
        <div className="mx-20">
          <div className="py-10 ">
            <Input_link texto_link={link} setLink={setLink} resumir={resumir} />

            {historico.map((hist, key) => (
              <Historico_link
                key={key}
                link={hist.link}
                resultado={hist.resultado}
                setResultado={setResultado}
                setLink={setLink}
              />
            ))}
          </div>

          {loading && <Loading />}
          {resultado && !loading && <Resultados resultado={resultado} />}
          {erro && !resultado && !loading && <Error error={erro} />}
        </div>
      </div>
    </>
  );
}

export default App;
