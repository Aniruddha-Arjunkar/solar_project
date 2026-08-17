import { Routes , Route } from 'react-router'
import Layout from "./Layout/DashBoardLayout/DashBoardLayout.jsx";
import DashBoard from './Views/DashBoard/DashBoard.jsx';

import './App.css'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<DashBoard/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
