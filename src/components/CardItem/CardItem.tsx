import "./style.css";
import capaPost from '../../assets/images/capa-post.jpg';
import { format, parseISO } from 'date-fns'


export interface CardItemProps {
  postagemId: number;
  titulo: string;
  conteudo: string;
  dataPostagem: string;
  nameUser: string;
}

export default function CardItem(props: CardItemProps) {
  const firstName = props.nameUser.split(" ")[0];
  const secondName = props.nameUser.split(" ")[1];


  const formatarData = (dataISO: string) => {
    const dataConvertida = parseISO(dataISO);
    return format(dataConvertida, "dd/MM/yyyy");
  };

  

  return (
    <div className="dsc-card">
                <div className="dsc-catalog-card-top">
                  <img src={capaPost} alt="Capa do Post" />
                </div>
                <div className="dsc-catalog-card-bottom">
                  <h3>{props.titulo}</h3>
                  <p>{props.conteudo.slice(0, 100)}...</p>
                  <div className="postado-em">
                    <div className="data-publicacao">{formatarData(props.dataPostagem)}</div>
                    <div className="data-publicacao"> 
                    <div className="autor-publicacao">{firstName}</div>
                    {secondName && <div className="autor-publicacao">{secondName}</div>}
                    </div>
                  </div>
                </div>
              </div>
  );
}

