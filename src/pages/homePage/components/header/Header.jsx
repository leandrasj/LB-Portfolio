import './Header.css'

function Header(){

return(

    <header className="header">

        <a className="logo"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }}        
        >
            <span>{"<Leandra/>"}</span>
        </a>
        <nav className="navbar">

            <a 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }}
            >
                Sobre
            </a>
            <a 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
            }}
            >
                Cursos
            </a>
            <a 
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                Projetos
            </a>

        </nav>

        <a className='btn'
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        >
            Contate-me
        </a>

    </header>

)

}

export default Header;