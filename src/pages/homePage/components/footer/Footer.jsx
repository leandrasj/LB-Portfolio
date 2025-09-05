import './Footer.css'

import GitHub from '../../../../assets/icons/github.png'
import LinkedIn from '../../../../assets/icons/linkedin.png'

function Footer(){

return(

    <footer className="footer">

        <p className='animated-text'>
            Transformando lógica em funcionalidade.
        </p>

        <div className="container-footer">

            <a className="contacts-footer"
            href='https://github.com/leandrasj'>
                <img src={GitHub} alt="GitHub" />
                <p>
                    GitHub
                </p>
            </a>
            <a className="contacts-footer"
            href='https://www.linkedin.com/in/leandrabeatriz/'>
                <img src={LinkedIn} alt="LinkedIn" />
                <p>
                    LinkedIn
                </p>
            </a>

        </div>

    </footer>

)

}

export default Footer;