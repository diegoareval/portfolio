import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'

const Header = () => {


    const toggleDarkMode = () =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
          x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <div>
            <div className="Header">
                <h1>{ `I'm ${header.name}` }</h1>
            <p className="line-1 anim-typewriter">and this is my  professional portfolio... </p>
            <label className="switch">
                <input id="mode-switch" onClick={toggleDarkMode} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <HeaderButton/>
            </div>
{
    //             <img id="not-dark" onClick={scrollTo} alt="Go to top" title="Go to top" className="gtp" src="https://avatars.githubusercontent.com/u/42577709?s=460&u=75e07ddc925acb04bf5c2a4e58bdffcb973175a3&v=4"></img>
}
        </div>
    )
    
}

export default Header;