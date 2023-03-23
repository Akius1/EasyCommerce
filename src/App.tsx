import { Container, CssBaseline, Box, Typography, Card } from "@mui/material";
import Divider from "@mui/material/Divider";
import { ThemeProvider } from "@mui/material/styles";



import theme from "./theme";
import heroImage from "./Assets/images/Image.png"
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import OutlinedCard from "./Components/CardWrappers";

// import Markdown from './Markdown';

interface MainProps {
  title: string;
}

function App() {
  const title = "dfsghjk";
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
