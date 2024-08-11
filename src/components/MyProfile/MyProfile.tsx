import "./style.css";
import capaPost from "../../assets/images/capa-post.jpg";
import { SetStateAction, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { format, parseISO } from "date-fns";
import {BASE_URL} from "../../utils/system.ts";

const MySwal = withReactContent(Swal);

interface PostByUser {
  postagemId: number;
  titulo: string;
  conteudo: string;
  dataPostagem: string;
}


export default function MyProfile() {
  const [buscarPostagens, setBuscarPostagens] = useState<PostByUser[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  //const userId = 1; // Id do usuário logado, ajustar conforme necessário


    useEffect(() => {
             axios.get(BASE_URL + "/postsByUser", {
                 headers: {
                     'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),
                 }
             })
            .then((response) => {
                setBuscarPostagens(response.data.feedItems);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [buscarPostagens]);


  function deletarPost(id: string) {
    MySwal.fire({
      title: "Você tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${BASE_URL}/posts/${id}`, {
                headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),}
        }).then(() => {
                const newList = buscarPostagens.filter((item) => item.postagemId !== Number(id));
                setBuscarPostagens(newList);
                MySwal.fire("Deletado!", "Seu post foi deletado.", "success");
        })
      }
    });
  }


  function cancelarEdicao() {
    setTitle("");
    setContent("");
    setEditingId(null);
  }

  function pegarTitulo(event: { target: { value: SetStateAction<string>; }; }) {
    setTitle(event.target.value);
  }

  function pegarConteudo(event: { target: { value: SetStateAction<string>; }; }) {
    setContent(event.target.value);
  }

  function cliqueiNoBotao(event: { preventDefault: () => void; }) {
    event.preventDefault();
    axios.post(`${BASE_URL}/posts`, {titulo: title, conteudo: content,},{
            headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),}
      }) .then(() => {
            MySwal.fire("Post criado!", "Seu post foi criado com sucesso.", "success");
      } )
    }

    function editarPost(id: string) {
        const post = buscarPostagens.find((item) => item.postagemId === Number(id));
        if (post) {
            setTitle(post.titulo);
            setContent(post.conteudo);
            setEditingId(id);
        }
    }

    function salvarEdicao() {
      console.log(editingId);
        axios.put(`${BASE_URL}/updatePost/${editingId}`, {titulo: title, conteudo: content}, {
                headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),}
        }).then(() => {
                MySwal.fire("Post editado!", "Seu post foi editado com sucesso.", "success");
                setTitle("");
                setContent("");
                setEditingId(null);
        }).catch((error) => {
            console.log(error);
        });
    }


  return (
    <section className="post-container">
      <div className="post-section post-input">
        <h2 className="content-color">Criar Post</h2>
        <input
          name="postTitle"
          type="text"
          alt="adicionando titulo"
          className="post-input-title"
          onChange={pegarTitulo}
          value={title}
          placeholder="Título"
          required
        />
        <textarea
          name="Postcontent"
          id="content"
          className="post-input-content"
          cols={30}
          rows={10}
          onChange={pegarConteudo}
          value={content}
          placeholder="Conteúdo"
          required
        />
        <button className="post-button" onClick={cliqueiNoBotao}>
          Adicionar
        </button>
      </div>
      <div className="post-section post-list">
        <h2 className="content-color">Meus Posts</h2>
        {buscarPostagens &&
          buscarPostagens.map((item) => (
            <div key={item.postagemId} className="post-content-type">
              <img src={capaPost} alt="Capa do post" className="img-post" />
              <div className="post-content-text">
                {editingId !== null && Number(editingId) === item.postagemId ? (
                  <div className="edit-form">
                    <input
                      name="postTitle"
                      type="text"
                      value={title}
                      onChange={pegarTitulo}
                      className="post-input-title"
                      placeholder="Título"
                      required
                    />
                    <textarea
                      name="Postcontent"
                      value={content}
                      onChange={pegarConteudo}
                      className="post-input-content"
                      placeholder="Conteúdo"
                      required
                    />
                    <button className="post-button" onClick={salvarEdicao}>
                      Salvar
                    </button>
                    <button
                      className="post-button cancel-button"
                      onClick={cancelarEdicao}
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="content-color">{item.titulo}</h2>
                    <p className="content-color">{item.conteudo}</p>
                    <div className="content-data-postagem">
                      Publicado em:{" "}
                      {format(parseISO(item.dataPostagem), "dd/MM/yyyy")}
                    </div>
                  </>
                )}
              </div>
              <div className="post-content-actions">
                <button
                  className="post-edit-button"
                  onClick={() => editarPost(item.postagemId.toString())}
                >
                  Editar
                </button>
                <button
                  className="post-delete-button"
                  onClick={() => deletarPost(item.postagemId.toString())}
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
