import capaPost from "../../assets/images/capa-post.jpg";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { parseISO, format } from "date-fns";
import {BASE_URL} from "../../utils/system.ts";

interface Feed {
  postagemId: number;
  titulo: string;
  conteudo: string;
  dataPostagem: string;
  nameUser: string;
}

export default function OnePost() {
  const [postagem, setPostagem] = useState<Feed | null>(null);

  const params = useParams();
  const postId = Number(params.postId);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/feed/${postId}`)
      .then((response) => {
        setPostagem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  const formatarData = (dataISO: string) => {
    const dataConvertida = parseISO(dataISO);
    return format(dataConvertida, "dd/MM/yyyy");
  };

  return (
    postagem && (
      <main className={"container"}>
        <section className={"container-one-post"}>
          <div className="post-card">
            <div className={"mt-3 mb-3"}>
              <img
                src={capaPost}
                alt="Capa do post"
                className="img-post-individual"
              />
            </div>
            <div>
              <h3 className={"post-title mb-3"}>{postagem.titulo}</h3>
              <p className={"post-content-one-post"}>{postagem.conteudo}</p>
              <p className={"post-date"}>
                Publicado em: {formatarData(postagem.dataPostagem)}
              </p>
              <p className={"post-date"}>
                Criado por: {postagem.nameUser}
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  );
}
