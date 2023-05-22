import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarAPI = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${API_KEY}`;
      const { data } = await axios(URL);
      // console.log(data);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    };
    consultarAPI();
  }, [categoria]);

  useEffect(() => {
    const consultarAPI = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${API_KEY}`;
      const { data } = await axios(URL);
      // console.log(data);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
    };
    consultarAPI();
  }, [pagina]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePage = (e, value) => {
    setPagina(value);
  };
  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePage,
        pagina,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };
export default NoticiasContext;
