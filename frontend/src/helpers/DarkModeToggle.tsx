import { useLayoutEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const DarkModeToggle = () => {
	const [isDarkMode, setDarkMode] = useState(true);

	// Checks local storage for dark mode
	useLayoutEffect(() => {
		const darkMode = globalThis.localStorage.getItem('darkMode');

		const isDark = darkMode && JSON.parse(darkMode);

		if (!isDark) {
			globalThis.document.documentElement.classList.add('dark');
		} else {
			setDarkMode(isDark);
			isDark
				? globalThis.document.documentElement.classList.add('dark')
				: globalThis.document.documentElement.classList.remove('dark');
		}
	}, []);

	const toggleDarkMode = (checked: boolean) => {
		globalThis.localStorage.setItem('darkMode', JSON.stringify(checked));
		setDarkMode(checked);
		checked
			? globalThis.document.documentElement.classList.add('dark')
			: globalThis.document.documentElement.classList.remove('dark');
	};

	return (
		<DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={35} />
	);
};
