import { useEffect, useState } from "react";
import styled from "styled-components";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=11`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };
  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div>
      {popular.map((recipi) => {
        return (
          <Wrapper>
            <h3>Tredning STuffs </h3>
          </Wrapper>
        );
      })}
    </div>
  );
};
const Wrapper = styled.div`
  margin: 4rem 0 rem;
`;

export default Popular;
