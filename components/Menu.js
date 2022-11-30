import Link from "next/link";

const linkStyle = {
    marginRight: 15
}

const Menu = () => (
    <div>
          <nav className="navbar">
               <div className="max-width"> 
                    <div className="logo">
                         <a href='/'>Isabela</a>
                    </div>
                    <ul className='menu'>
                         <li><a href="/" classname="menu-btn">Home</a></li>
                         <li><a href="/sobre" classname="menu-btn">Sobre</a></li>
                         <li><a href="/contato" classname="menu-btn">Contato</a></li>
                    </ul>
                    <div classname="menu-btn">
                         <i class="fa-sharp fa-solid fa-bars"></i>
                    </div>
               </div>
          </nav>
    </div>
);

export default Menu;