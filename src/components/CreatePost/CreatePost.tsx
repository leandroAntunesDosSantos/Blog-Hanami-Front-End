import './style.css';
import capaPost from '../../assets/images/tecnologia1.png';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import { BASE_URL } from '../../utils/system';
const MySwal = withReactContent(Swal);
import { useNavigate } from 'react-router-dom';




export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();


    function createPost() {
      axios.post(`${BASE_URL}/posts`, {
        titulo: title,
        conteudo: content,
      }, {
        headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),},
      }).then(() => {
        MySwal.fire({
          icon: 'success',
          title: 'Post criado com sucesso!',
          showConfirmButton: false,
          timer: 1500,
        });
        setTitle("");
        setContent("");
        navigate("/profile");

      }).catch((error) => {
        console.log("Erro: ", error);
        MySwal.fire({
          icon: 'error',
          title: 'Erro ao criar post',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  

    return (
      <main className={"container"}>
      <div className={"container-create-post"}>
        <div className="create-post-card">
          <div className={"create-post-image"}>
            <img
              src={capaPost}
              alt="Capa do post"
            />
          </div>
          <div>
              <input 
                type="text"
                placeholder="Título do post"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='input-title'
              />
              <textarea
                placeholder="Conteúdo do post"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                cols={50}
                rows={20}
                className='input-content'
              />
          </div>
          <button 
            className='btn-create-post'
            onClick={createPost}
          > 
            Criar post
          </button>
        </div>
      </div>
    </main>
    );
}

