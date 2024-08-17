import "./style.css";
import { postDto } from "../../models/postDto.ts";
import { BASE_URL } from "../../utils/system.ts";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardItem from "../CardItem/CardItem.tsx";


export default function MyProfile() {
  const [findPosts, setFindPosts] = useState<postDto[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get(BASE_URL + "/postsByUser",{
      headers: {
        'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),
      }
    }).then((response) => {
      setFindPosts(response.data.feedItems);
      setName(response.data.feedItems[0].nameUser);
    }).catch((error) => {
      console.log("Erro: ", error);
    });
  }, []);

  return (
    <main id="catalog-details" className="container">
      <h1 className="title-main mt20 mb20">
        Olá, {name}! Aqui estão os seus posts:
      </h1>
      <Link to="/profile/posts" className="btn btn-primary">
        Criar novo post
      </Link>
      <div className="hanami-catalog-cards mb20 mt20">
        {findPosts.map((item) => (
          <Link to={`/profile/${item.postagemId}`} key={item.postagemId}>
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
    </main>

  );
}
