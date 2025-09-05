import './courses.css'

function Courses(){

const course = [
    {curso: 'Assistente de Tecnologia', Inst: 'SENAC', desc: 'Formação voltada para suporte técnico e auxílio no uso de ferramentas digitais, com aprendizado em informática básica, aplicativos de escritório, organização em nuvem e segurança digital. Preparação para atender usuários e empresas de forma prática e eficiente.', 
     status: 'Cursando'
    },
    {curso: 'Assistente de Tecnologia', Inst: 'SENAC', desc: 'Formação voltada para suporte técnico e auxílio no uso de ferramentas digitais, com aprendizado em informática básica, aplicativos de escritório, organização em nuvem e segurança digital. Preparação para atender usuários e empresas de forma prática e eficiente.', 
     status: 'Cursando'
    },
]

return(

    <section className="courses" id="courses">

        <h2>
            Cursos
        </h2>
        <div className="courses-container">

            {course.map((curso, i) => (
            <div key={i} className="course-card">
                <h3>{curso.curso}</h3>
                <p>{curso.desc}</p>
                <small>{curso.Inst} - {curso.status}</small>
            </div>
            ))}

        </div>

    </section>

)

}

export default Courses;