import './Home.css'

import Skills from '../skills/Skills'

import GitHub from '../../../../assets/icons/github.png'
import LinkedIn from '../../../../assets/icons/linkedin.png'

import Photo from '../../../../assets/img/photo.png'

const social = [
    {
        social_icon: GitHub,
        social_title:'GitHub',
        social_link: 'https://github.com/leandrasj'
    },
    {
        social_icon: LinkedIn,
        social_title:'LinkedIn',
        social_link: 'https://www.linkedin.com/in/leandrabeatriz/'
    }
]

function Home(){

return(

    <section className="home" id="home">

        <div className="main-home-content">

            <div className="home-content">

                <h1>
                    Olá, eu sou a <span>Leandra Beatriz</span>
                </h1>
                <p>
                    Atualmente estou cursando o curso técnico em TI no SENAC, onde tenho aprofundado meus conhecimentos em desenvolvimento back-end. 
                    Tenho me dedicado a dominar linguagens de programação, bancos de dados e boas práticas de arquitetura de sistemas, 
                    buscando sempre soluções eficientes e escaláveis.  
                    Meu objetivo é aplicar esse conhecimento em projetos reais, contribuindo para o desenvolvimento de sistemas robustos e inovadores.
                </p>
                <div className="social-icons">
                    
                    {social.map((item, i) => (
                        <a key={i} href={item.social_link} target='_blank'>
                            <img src={item.social_icon} alt={item.social_title} />
                        </a>
                    ))}

                </div>
                <div className='btn-header-in-home'>               
                    <a className='btn-home'
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    >                    
                        Contate-me
                    </a>
                </div>  
            </div>
            <a className="home-img"
            href='#about'>
                <img src={Photo} alt="Leandra Beatriz" />
            </a>
        </div>
        <Skills/>
    </section>

)

}

export default Home;