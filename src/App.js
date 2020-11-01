import React from 'react';
import cn from 'classnames';

import './custom.css';
import s from './App.modules.scss';

const App = () => {
	return (
		<div className={cn(s.header, 'color')}>
			Test This is App Componet!
		</div>
	)
}

export default App;