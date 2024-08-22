import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BASE_URL} from "../../utils/system.ts";
import CardItem from "../CardItem/CardItem.tsx";
import SearchBar from "../SearchBar/SearchBar.tsx";

interface Feed {
  postagemId: number;
  titulo: string;
  conteudo: string;
  dataPostagem: string;
  nameUser: string;
}
export default function AllPosts() {
  const [buscarPostagens, setBuscarPostagens] = useState<Feed[]>([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");


  function handleSearch(search: string) {
    setSearch(search);
    axios
      .get(BASE_URL + "/feed" + `?page=0&size=12&titulo=${search}`)
      .then((response) => {
        setBuscarPostagens(response.data.content);
        setPage(1);
        if (response.data.last) {
          setIsLastPage(true);
        }
      });
  }

  function nextPage() {
    axios
      .get(BASE_URL + "/feed" + `?page=${page}&size=12&titulo=${search}&sort=dataPostagem,desc`)
      .then((response) => {
        setBuscarPostagens([...buscarPostagens, ...response.data.content]);
        setPage(page + 1);
        if (response.data.last) {
          setIsLastPage(true);
        }
      }
    );
  }

  useEffect(() => {
    axios.get(BASE_URL + "/feed" + `?page=0&size=12&sort=dataPostagem,desc`).then((response) => {
      setBuscarPostagens(response.data.content);
      setPage(1);
      if (response.data.last) {
        setIsLastPage(true);
      }
    }
    );
  }
  , []);

  return (
    <main id="catalog-details" className="container">
      <h1 className="title-main mt20 mb20">
        Explore Todos os Posts do Nosso Blog!
      </h1>
      <SearchBar  onSearch={handleSearch} />
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
      {!isLastPage && <div className="hanami-btn-next-page" onClick={nextPage}>Carregar mais</div>}
    </main>
  );
}
