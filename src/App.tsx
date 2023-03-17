import React from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeContext from './contexts/ThemeContext'
import useThemeMode from './hooks/useThemeMode'
import { lightTheme, darkTheme } from './styles/themes'
import GlobalStyle from './styles/global'
import Landing from './pages/Landing'

const App: React.FC = () => {
	const { theme } = useThemeMode()
	const themeMode = theme === 'light' ? lightTheme : darkTheme

	return (
		<ThemeContext>
			<ThemeProvider theme={themeMode}>
				<main>
					<GlobalStyle />
					<Landing />
				</main>
			</ThemeProvider>
		</ThemeContext>
	)
}

export default App
