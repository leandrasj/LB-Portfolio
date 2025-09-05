

/*Importando seções */
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Project'
import Courses from './components/courses/Courses'

function HomePage(){

return(

    <>
    
      <Header/>
      <Home/>
      <Courses/>
      <Projects/>
      <Contact/>
      <Footer/>    
    
    </>

)

}

export default HomePage;