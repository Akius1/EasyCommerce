import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import OutlinedCard from "./Components/CardWrappers";





function App() {
 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <Header />
        <HeroSection />
        <OutlinedCard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
