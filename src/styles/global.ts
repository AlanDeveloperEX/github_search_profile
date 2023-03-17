import { createGlobalStyle, withTheme } from 'styled-components'
import { ThemeProps } from './themes'

type GlobalThemeProps = {
	theme: ThemeProps
}

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 20px;
	}
`

export default withTheme(GlobalStyle)
