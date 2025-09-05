import '../projects_styles.css'

import Img from '../../../assets/courses/gallery.png'

function ProjNotes(){

return(

    <section className="project-style" id='proj-notes'>

        <header>
            <a href='' className='back'>
                Voltar
            </a>
            <a href="" className="logo">
                <span>{"<Leandra/>"}</span>
            </a>
        </header>
        <div className="proj-container">

            <main className='main-proj'>

                <h2>
                    <span>Bloco de Notas</span>
                </h2>
                <p>
                    Bloco de notas mobile desenvolvido em Python com o framework Kivy, pensado para oferecer uma experiência leve e eficiente em dispositivos móveis. Conta com uma interface intuitiva e responsiva, projetada para facilitar o uso mesmo em telas menores. O aplicativo permite criar, editar e salvar anotações de forma prática, garantindo que suas ideias e tarefas estejam sempre organizadas. Além disso, possui suporte a múltiplas notas, sistema de listagem para fácil navegação, e foco na simplicidade para manter a produtividade sem distrações. O projeto serve como um ótimo exemplo de aplicação real com Python voltada para dispositivos móveis, unindo design funcional e código otimizado.
                </p>
                <div className="project-btn-container">

                    <a href="https://github.com/leandrasj/blocodenotas">
                        Ver código
                    </a>
                    <a href="">
                        dar uma espiada
                    </a>

                </div>

            </main>
            <aside>

                <img src={Img} alt="" className='img-proj'/>
                <img src={Img} alt="" className='img-proj'/>
                <img src={Img} alt="" className='img-proj'/>
                <img src={Img} alt="" className='img-proj'/>

            </aside>

        </div>

    </section>

)

}

export default ProjNotes;