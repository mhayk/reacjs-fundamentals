import React from 'react';

import { useRouteMatch, Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { path } = useRouteMatch();
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          {path === '/' ? (
            <>
              <Link className="active" to="/">
                Listagem
              </Link>
              <Link to="/import">Importar</Link>
            </>
          ) : (
            <>
              <Link to="/">Listagem</Link>
              <Link className="active" to="/import">
                Importar
              </Link>
            </>
          )}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
