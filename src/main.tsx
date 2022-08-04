import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import green from '@mui/material/colors/green'

const theme = createTheme({
	palette: {
		primary: {
			main: green[400]
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
