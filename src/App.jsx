import './App.css';
import Logo from './components/Logo';
import profile from './images/perfil.svg'
import shoppingBage from './images/sacola.svg'

const textOptions = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE']
const icons = [profile,shoppingBage]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='options'>
          {textOptions.map((text) => (
            <li className='option'><p>{text}</p></li>
          ))}
        </ul>
        <ul className='icons'>
          {icons.map((icons) => (
            <li className='icons-navbar'><img src={icons} alt="" /></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
