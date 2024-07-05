
import './style.css'; // Importando o arquivo de estilos CSS

export default function AboutUsHome() {
    return (
        <div className="about-us-container">
            <div className="section about">
                <h2>Bem-vindo ao Blog Hanami!</h2>
                <p>O Blog Hanami é um espaço dedicado a compartilhar conhecimento, cultura e entretenimento. Inspirado pela beleza e serenidade das flores de cerejeira (hanami, em japonês), nosso blog busca oferecer conteúdos que encantam e enriquecem a vida de nossos leitores.</p>
            </div>
            <div className="section mission">
                <h2>Nossa Missão</h2>
                <p>Nosso objetivo é criar uma comunidade vibrante onde leitores possam explorar uma variedade de tópicos, desde resenhas de livros e filmes até artigos sobre desenvolvimento pessoal e bem-estar. Acreditamos que o aprendizado contínuo e o prazer da leitura são fundamentais para uma vida plena e significativa.</p>
            </div>
            <div className="section content">
                <h2>O que Você Vai Encontrar Aqui</h2>
                <ul>
                    <li><strong>Resenhas de Livros:</strong> <span>Desde clássicos da literatura até os lançamentos mais recentes, oferecemos resenhas detalhadas e perspicazes.</span></li>
                    <li><strong>Artigos de Cultura:</strong> <span>Explore conteúdos sobre filmes, séries, música e mais, com análises e recomendações.</span></li>
                    <li><strong>Dicas e Tutoriais:</strong> <span>Encontre dicas práticas para o dia a dia, além de tutoriais sobre diversos temas.</span></li>
                    <li><strong>Histórias Inspiradoras:</strong> <span>Leia crônicas e histórias baseadas em observações de figuras de liderança e acontecimentos históricos.</span></li>
                </ul>
            </div>
            <div className="section join">
                <h2>Junte-se a Nós</h2>
                <p>Estamos sempre abertos a novos colaboradores e sugestões de temas. Se você tem algo interessante para compartilhar ou deseja sugerir um tópico, entre em contato conosco! Adoramos ouvir nossos leitores e valorizar suas contribuições.</p>
            </div>
        </div>
    );
}
