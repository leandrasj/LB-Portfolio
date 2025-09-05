import './Skills.css'

/*Icones das habilidades */
import Cssicon from '../../../../assets/skills/css.png'
import HTMLicon from '../../../../assets/skills/html.png'
import Python from '../../../../assets/skills/py.png'
import Git from '../../../../assets/skills/git.png'

function Skills(){

const Skill = [
    {icon: Python, name: 'Python'},
    {icon: Git, name: 'Git'},
    {icon: HTMLicon, name: 'HTML'},
    {icon: Cssicon, name: 'CSS'},  
]
    
return(

    <div className="skills" id="skills">
        <div className="skills-track">
            {Skill.map((skill, i) => (
            <div key={i} className="skill-card">
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
            </div>
            ))}
            {Skill.map((skill, i) => (
            <div key={i + Skill.length} className="skill-card">
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
            </div>
            ))}
            {Skill.map((skill, i) => (
            <div key={i + Skill.length} className="skill-card">
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
            </div>
            ))}
        </div>
    </div>


)

}

export default Skills;