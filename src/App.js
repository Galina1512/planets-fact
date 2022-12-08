import React, { useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { Close } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
<<<<<<< HEAD
import  CircleIcon  from '@mui/icons-material/Circle';
=======
import { CircleIcon } from '@mui/icons-material/Circle';
>>>>>>> 393e5a26852bf4b61bd702b2e828b83d3faa36b4
import Mercury from './Mercury';
import Venus from './Venus';
import Earth from './Earth';
import Mars from './Mars';
import Jupiter from './Jupiter';
import Saturn from './Saturn';
import Uranus from './Uranus';
import Neptune from './Neptune';
import './App.css';

function App(){
const [active, setActive] = useState(false);

const showMenu = () => {
    setActive(!active);
}

    return <Router>
    <div className="header">
            <div className="menu-icon">
                <MenuOutlined className="menu" onClick = {showMenu}/>
            </div>
            <div className="brand link">
                <p>THE PLANETS</p>
            </div>

        <nav className= {active ? "slider active" : "slider"}>
            <div className="closed" onClick = {showMenu}>
                <Close className="close" onClick = {showMenu}/>
            </div>
            <Link to='/' className="link"><CircleIcon className="merk"/>MERCURY</Link> 
            <Link to='/venus' className="link"><CircleIcon className="venus"/> VENUS</Link>
            <Link to='/earth' className="link"> <CircleIcon className="earth"/>EARTH</Link>
            <Link to='/mars' className="link"><CircleIcon className="mars"/>MARS</Link> 
            <Link to='/jupiter' className="link"><CircleIcon className="jup"/>JUPITER</Link>
            <Link to='/saturn' className="link"><CircleIcon className="sat"/>SATURN</Link>
            <Link to='/uranus' className="link"><CircleIcon className="uran"/>URANUS</Link>
            <Link to='/neptune' className="link"><CircleIcon className="nept"/>NEPTUNE </Link>
        </nav>
        <Routes>
            <Route path='/' element={<Mercury/>}/>
            <Route path='/venus' element={<Venus/>}/>
            <Route path='/earth' element={<Earth/>}/>
            <Route path='/mars' element={<Mars/>}/>
            <Route path='/jupiter' element={<Jupiter/>}/>
            <Route path='/saturn' element={<Saturn/>}/>
            <Route path='/uranus' element={<Uranus/>}/>
            <Route path='/neptune' element={<Neptune/>}/>
        </Routes>
        </div>
    </Router>
};
export default App;
