import "./style.css";
import capaPost from "../../assets/images/capa-post.jpg";
import { SetStateAction, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { format, parseISO } from "date-fns"; // Importar o format e parseISO

const MySwal = withReactContent(Swal);


interface Postagem {
  codigo: number;
  titulo: string;
  conteudo: string;
  dataPostagem: string;
}



export default function MyProfile() {
  const [buscarPostagens, setBuscarPostagens] = useState<Postagem[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  //const userId = 1; // Id do usuário logado, ajustar conforme necessário

  useEffect(() => {
    axios
      .get("https://repositorio-privado-java-backend.onrender.com/listarPostagens")
      .then((response) => {
        const sortedPosts = response.data.sort((a: { dataPostagem: string | number | Date; }, b: { dataPostagem: string | number | Date; }) => {
          return (
            new Date(b.dataPostagem).getTime() -
            new Date(a.dataPostagem).getTime()
          );
        });
        setBuscarPostagens(sortedPosts);
      })
      .catch((error) => {
        console.error("Erro ao buscar postagens:", error);
      });
  }, []);

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
        axios.delete("https://repositorio-privado-java-backend.onrender.com/deletarPostagem/" + id)
            .then(() => {
                const newList = buscarPostagens.filter((item) => item.codigo !== Number(id));
                setBuscarPostagens(newList);
                MySwal.fire("Deletado!", "Seu post foi deletado.", "success").then(r =>  {
                    if (r.isConfirmed || r.isDismissed) {
                        window.location.reload();
                    }
                });
            }
            )
      }
    });
  }

  function editarPost(id: string) {
    const editedPost = buscarPostagens.find((item) => item.codigo === Number(id));
    if (editedPost) {
      setTitle(editedPost.titulo);
      setContent(editedPost.conteudo);
      setEditingId(id);
    }
  }

  function salvarEdicao() {
    axios
      .put("https://repositorio-privado-java-backend.onrender.com/atualizarPostagem", {
        codigo: editingId,
        titulo: title,
        conteudo: content,
      })
      .then(() => {
        const newList = buscarPostagens.map((item) => {
          if (editingId !== null && item.codigo === Number(editingId)) {
            return { ...item, titulo: title, conteudo: content };
          }
          return item;
        });
        setBuscarPostagens(newList);
        setTitle("");
        setContent("");
        setEditingId(null);
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

  function cliqueiNoBotao() {
    axios
      .post("https://repositorio-privado-java-backend.onrender.com/criarPostagem", {
        titulo: title,
        conteudo: content,
      })
      .then((response) => {
        setBuscarPostagens([...buscarPostagens, response.data]);
        setTitle("");
        setContent("");
        setEditingId(null);
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
            <div key={item.codigo} className="post-content-type">
              <img src={capaPost} alt="Capa do post" className="img-post" />
              <div className="post-content-text">
                {editingId !== null && Number(editingId) === item.codigo ? (
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
                  onClick={() => editarPost(item.codigo.toString())}
                >
                  Editar
                </button>
                <button
                  className="post-delete-button"
                  onClick={() => deletarPost(item.codigo.toString())}
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
