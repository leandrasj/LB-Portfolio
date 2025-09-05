import './Contact.css'

import GitHub from '../../../../assets/icons/github.png'
import LinkedIn from '../../../../assets/icons/linkedin.png'
import Email from '../../../../assets/icons/email.png'

function Contact() {

  const contacts = [
    {
      icon: GitHub,
      title: "GitHub",
      link: "https://github.com/leandrasj",
      alt: "Ícone do GitHub",
      displayText: "https://github.com/leandrasj"
    },
    {
      icon: LinkedIn,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/leandrabeatriz/",
      alt: "Ícone do LinkedIn",
      displayText: "https://www.linkedin.com/in/leandrabeatriz/"
    },
    {
      icon: Email,
      title: "Email",
      link: "mailto:leandrabeatriz.dev@gmail.com",
      alt: "Ícone de Email",
      displayText: "leandrabeatriz.dev@gmail.com"
    }
  ];

  return (
    
    <section className="contact" id="contact">

      <h2>Entre em contato</h2>

      <form
        action="https://formsubmit.co/leandrabeatriz.dev@gmail.com"
        method="POST"
      >

        <div className="send-infs">

          <div className="contacts-infs">

            <h3>Informações de contato</h3>

            {contacts.map((contact, index) => (
              <div className="container-infs-icon-div" key={index}>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <img src={contact.icon} alt={contact.alt} />
                </a>
                <div className="text-container">
                  <p>{contact.title}</p>
                  <a href={contact.link} target="_blank" rel="noopener noreferrer">
                    {contact.displayText}
                  </a>
                </div>
              </div>
            ))}

          </div>
          <div className="inputs-user-infs">

            <input
              type="text"
              name="name"
              className="name"
              placeholder="Nome e sobrenome"
              required
              autoComplete="name"
            />

            <input
              type="email"
              name="email"
              className="email"
              placeholder="Email"
              required
              autoComplete="email"
            />

            <textarea
              name="message"
              placeholder="Digite sua mensagem aqui!"
              required
            />

          </div>

          <input type="hidden" name="_captcha" value="false" />

          <input
            type="hidden"
            name="_next"
            value="https://leandrasj.github.io/LB-Portfolio/"
          />

        </div>

        <button type="submit">Enviar</button>

      </form>

    </section>

  );

}

export default Contact;