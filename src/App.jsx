import { Container, Grid, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <header>
        <Typography
          align="center"
          marginY={5}
          sx={{ fontWeight: "bold" }}
          component="h1"
          variant="h3"
        >
          Buscador de Noticias
        </Typography>
      </header>
    </Container>
  );
}

export default App;
