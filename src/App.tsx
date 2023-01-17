import { ThemeProvider } from 'styled-components';
import { AboutUs } from './components/AboutUs';
import { Header } from './components/Header';
import { OurAchievement } from './components/OurAchievement';
import { OurCommunity } from './components/OurCommunity';
import { ValuableTeam } from './components/ValuableTeam';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <AboutUs />
      <OurAchievement />
      <OurCommunity />
      <ValuableTeam />
    </ThemeProvider>
  );
}

export default App;
