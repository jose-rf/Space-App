import styled from "styled-components";
import FotoDestaque from "./FotoDestaque.png";

const BannerEstilizado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${FotoDestaque});
  background-size: cover;
  background-position: center;
  border-radius: 30px;
`;

const TituloSobreImagem = styled.h1`
  position: absolute;
  margin: 0;
  padding: 10px;
  color: white;
  font-weight: 400;
  top: 110px; 
  left: 110px; 
  width: 250px;
  height: 140px;
  border-radius: 10px;
`;

const TituloEstilizado = () => {
  return (
    <main>
      <BannerEstilizado>
        <TituloSobreImagem>
          A galeria mais completa de fotos do espaço!
        </TituloSobreImagem>
      </BannerEstilizado>
    </main>
  );
};

export default TituloEstilizado;
