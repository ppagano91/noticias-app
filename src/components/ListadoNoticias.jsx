import React from "react";

import Noticia from "./Noticia";

import useNoticias from "../hooks/useNoticias";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ListadoNoticias = () => {
  const { noticias, totalNoticias } = useNoticias();
  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Últimas noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia, index) => {
          return (
            <Noticia
              key={index} //key={url}
              noticia={noticia}
            />
          );
        })}
      </Grid>
      <Stack
        sx={{ marginY: 5 }}
        spacing={2}
        direction={"row"}
        justifyContent="center"
        alignItems="center"
      >
        <Pagination count={totalPaginas} color="primary" />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
