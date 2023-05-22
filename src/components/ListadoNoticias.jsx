import React from "react";

import Noticia from "./Noticia";

import useNoticias from "../hooks/useNoticias";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ListadoNoticias = () => {
  const { noticias } = useNoticias();

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
      <Grid>
        {noticias.map((noticia, index) => {
          return (
            <Noticia
              key={index} //key={url}
              noticia={noticia}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default ListadoNoticias;
