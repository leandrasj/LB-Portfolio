import './Project.css'

import { useNavigate } from 'react-router-dom'

import Notes from '../../../../assets/img/note.png'

import Python from '../../../../assets/skills/py.png'

function Projects(){

const navigate = useNavigate();

const PJS = [  
    {
        Proj_img: Notes,
        Proj_title: 'Bloco de notas',
        Proj_description: 'Bloco de notas mobile desenvolvido em Python com Kivy, com interface intuitiva e responsiva. Permite criar, editar e salvar anotações de forma prática, facilitando a organização de ideias e tarefas.',
        Proj_skills: [Python],
        Proj_link: "/ProjNotes",
    },
]

return(

    <section className="projects" id="projects">

        <h2>
            Projetos
        </h2>
        <div className="projects-container">

            {PJS.map((project, index) => (
                <div className="proj-card"
                key={index}>
                    <div className="Pj-img-container">
                        <img src={project.Proj_img} alt={project.Proj_title} />
                    </div>
                    <div className="proj-infs-container">
                        <h3>
                            <span>{project.Proj_title}</span>
                        </h3>
                        <p className='p-description'>
                            {project.Proj_description}
                        </p>
                        <ul className='proj-skills'>
                            {project.Proj_skills.map((skill, skillIndex) => 
                            <li key={skillIndex}>
                                <img className='icon-skill-used-in-project' alt={project.Proj_title}
                                src={skill}/>
                            </li>
                            )}
                        </ul>
                        <button onClick={() => navigate(project.Proj_link)}>
                            Ver projeto
                        </button>
                    </div>
                </div>
            ))}

        </div>


    </section>

)

}

export default Projects;