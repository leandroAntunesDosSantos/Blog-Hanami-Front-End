import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BASE_URL} from "../../utils/system.ts";
import CardItem from "../CardItem/CardItem.tsx";

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
 
  return (
    <main id="catalog-details" className="container">
      <h1 className="title-main mt20 mb20">
        Explore Todos os Posts do Nosso Blog!
      </h1>
      <div className="hanami-catalog-cards mb20 mt20">
        {buscarPostagens.map((item) => (
          <Link to={`/onePostHome/${item.postagemId}`} key={item.postagemId}>
            <CardItem
              postagemId={item.postagemId}
              titulo={item.titulo}
              conteudo={item.conteudo}
              dataPostagem={item.dataPostagem}
              nameUser={item.nameUser}
            />
          </Link>
        ))}
      </div>
      <div className="hanami-btn-next-page">Carregar mais</div>
    </main>
  );
}
