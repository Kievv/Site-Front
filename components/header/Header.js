import Navbar from '../navbar/Navbar';

const menu = ['home', 'remedios', 'consultas', 'exames'];

const Header = () => {
  return <Navbar itens={menu} />;
};

export default Header;