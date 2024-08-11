import "./style.css";
import capaPost from "../../assets/images/capa-post.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { parseISO, format } from "date-fns";
import {BASE_URL} from "../../utils/system.ts";

interface Feed {
  postagemId: number;
  titulo: string;
  conteudo: string;
  dataPostagem: string;
  nameUser: string;
}
export default function AllPosts() {
  const [buscarPostagens, setBuscarPostagens] = useState<Feed[]>([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/feed")
      .then((response) => {
        setBuscarPostagens(response.data.feedItems);
      })
      .catch((error) => {
        console.log(error);
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
          buscarPostagens.map(({ postagemId, titulo, conteudo, dataPostagem,nameUser}) => (
            <Link to={`/onePostHome/${postagemId}`} key={postagemId}>
              <div className="dsc-card">
                <div className="dsc-catalog-card-top">
                  <img src={capaPost} alt="Capa do Post" />
                </div>
                <div className="dsc-catalog-card-bottom">
                  <h3>{titulo}</h3>
                  <p>{conteudo.slice(0, 100)}...</p>
                  <div className="postado-em">
                    <span className="data-publicacao">{formatarData(dataPostagem)}</span>
                    <span className="data-publicacao">{nameUser}</span>
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
