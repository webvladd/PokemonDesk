import React from 'react';
import s from './Header.module.scss';

const Header = () => {
	return (
		<header className={s.header}>
			<nav>
				<a>Home</a>
				<a>Pokédex</a>
				<a>Legendaries</a>
				<a>Documentation</a>
			</nav>
		</header>
	);
};

export default Header;