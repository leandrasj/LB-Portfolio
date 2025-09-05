import { HashRouter, Routes, Route } from 'react-router-dom';

import './styles/Global.css'

/*Importando páginas */
import HomePage from './pages/homePage/HomePage';
import ProjNotes from './pages/coursesPages/Proj_Notes/ProjNotes';

function App() {

  return (

    <HashRouter>

      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/ProjNotes' element={<ProjNotes/>}/>

      </Routes>

    </HashRouter>

  )
}

export default App;