import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = () => {
	const [isDarkMode, setDarkMode] = useState(false);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
		isDarkMode
			? document.documentElement.classList.remove('dark')
			: document.documentElement.classList.add('dark');
	};

	return (
		<DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={35} />
	);
};

export default DarkModeToggle;
