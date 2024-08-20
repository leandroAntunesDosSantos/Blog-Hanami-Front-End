import './style.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../utils/system";
import {useNavigate, useParams} from "react-router-dom";
import capaPost from "../../assets/images/tecnologia1.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


interface Post {
    postagemId: number;
    titulo: string;
    conteudo: string;
    dataPostagem: string;
    nameUser: string;
}

export default function MaintenancePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const parameter = useParams();

    useEffect(() => {
        axios.get(BASE_URL + "/postsByUser", {
            headers: {
                'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),
            }
        }).then((response) => {
            const posts = response.data.feedItems;
            const post = posts.find((item: Post) => item.postagemId === Number(parameter.postId));
            if (post) {
                setTitle(post.titulo);
                setContent(post.conteudo);
            }
        } ).catch((error) => {
            console.log("Erro: ", error);
        });
    }
    , [parameter.postId]);
       



    function editarPost() {
        axios.put(`${BASE_URL}/updatePost/${parameter.postId}`, {titulo: title, conteudo: content}, {
            headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),}
        }).then(() => {
            MySwal.fire({
                icon: 'success',
                title: 'Post editado com sucesso!',
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/profile");
        }).catch((error) => {
            console.log("Erro: ", error);
            MySwal.fire({
                icon: 'error',
                title: 'Erro ao editar post',
                showConfirmButton: false,
                timer: 1500,
            });
        });
    }

    function deletarPost() {
        MySwal.fire({
            title: 'Você tem certeza?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${BASE_URL}/posts/${parameter.postId}`, {
                    headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}'),},
                }).then(() => {
                    MySwal.fire({
                        icon: 'success',
                        title: 'Post deletado com sucesso!',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate("/profile");
                }).catch((error) => {
                    console.log("Erro: ", error);
                    MySwal.fire({
                        icon: 'error',
                        title: 'Erro ao deletar post',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
            }
        });
    }
    return (
        <main className={"container"}>
            <div className={"container-maintenance-post"}>
                <div className="maintenance-post-card">
                    <div className={"maintenace-post-image"}>
                        <img
                            src={capaPost}
                            alt="Capa do post"
                        />
                    </div>
                    <div className="edit-section">
                        <input
                            type="text"
                            className={"input-maintenance-post"}
                            placeholder={"Título do post"}
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                        <textarea
                            className={"input-maintenance-post"}
                            placeholder={"Conteúdo do post"}
                            value={content}
                            onChange={event => setContent(event.target.value)}
                        />
                        <div className={'buttons-edit'}>
                            <button className={"btn btn-primary"} onClick={editarPost}>
                                Editar post
                            </button>
                            <button className={"btn btn-danger"} onClick={deletarPost}>
                                Deletar post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}