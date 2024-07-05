import "./style.css";
import capaPost from "../../assets/images/capa-post.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { parseISO, format } from "date-fns";

interface Postagem {
  codigo: number;
  titulo: string;
  conteudo: string;
  dataPostagem: string;
}
export default function AllPosts() {
  const [buscarPostagens, setBuscarPostagens] = useState<Postagem[]>([]);

  useEffect(() => {
    axios.get("https://repositorio-privado-java-backend.onrender.com/listarPostagens").then((response) => {
      const sortedPosts = response.data.sort((a: Postagem, b: Postagem) => {
        return (
          new Date(b.dataPostagem).getTime() -
          new Date(a.dataPostagem).getTime()
        );
      });
      setBuscarPostagens(sortedPosts);
    });
  }, []);

  const formatarData = (dataISO: string) => {
    const dataConvertida = parseISO(dataISO);
    return format(dataConvertida, "dd/MM/yyyy");
  };

  return (
    <main id="catalog-details" className="container">
      <h1 className="title-main mt20 mb20">
        Explore Todos os Posts do Nosso Blog!
      </h1>
      <div className="dsc-catalog-cards mb20 mt20">
        {buscarPostagens &&
          buscarPostagens.map(({ codigo, titulo, conteudo, dataPostagem }) => (
            <Link to={`/onePostHome/${codigo}`} key={codigo}>
              <div className="dsc-card">
                <div className="dsc-catalog-card-top">
                  <img src={capaPost} alt="Capa do Post" />
                </div>
                <div className="dsc-catalog-card-bottom">
                  <h3>{titulo}</h3>
                  <p>{conteudo.slice(0, 100)}...</p>
                  <div className="postado-em">
                    <span className="data-publicacao">Publicado em: </span>
                    <span className="data-publicacao">
                      {formatarData(dataPostagem)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="dsc-btn-next-page">Carregar mais</div>
    </main>
  );
}
