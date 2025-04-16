import { PureComponent } from "react";
import { PokemonCardProps } from "./App";
import  styled from "styled-components";

export const PokemonCard = (props: PokemonCardProps) => {
  if (!props.pokemon) {
    return <div>Select a Pokemon</div>;
  }

  const getBackgroundColor = () => {
    
    switch (props?.pokemon?.type) {
      case "WATER":
        return "linear-gradient(to bottom left, #106d84, #ffffff);";
  
      case "FIRE":
        return "linear-gradient(to bottom left, #860f0f, white);";

      case "GRASS":
        return "linear-gradient(to bottom left, #205d17, white);"; 

      case "ELECTRIC":
        return "linear-gradient(to bottom left, #d9b00b, #ffffff);";
  
      default:
        return "linear-gradient(to bottom left, #777777, white);"
    }
  }


  return (
    <>
    <Card $backgroundColor={getBackgroundColor()}>
      <InfoContainer>
      <Column $alignLeft>
      <Title>Type:</Title>
      <Title>Name:</Title>
      <Title>Height:</Title>
      <Title>Ability:</Title>
      <Title>Attack:</Title>
      <Title>Speed:</Title>
      </Column>

      <Column>
      <Value>{props.pokemon?.type}</Value>
      <Value>{props.pokemon?.name}</Value>
      <Value>{props.pokemon?.height}</Value>
      <Value>{props.pokemon?.ability}</Value>
      <Value>{props.pokemon?.attack}</Value>
      <Value>{props.pokemon?.speed}</Value>
      </Column>
      </InfoContainer>
    </Card>
    </>
  );
};

const Title = styled.div`
  font-weight: bold;
  display:flex;
  justify-content: center
`;

const Value = styled.div`
  display: flex;
`
const Card = styled.div <{$backgroundColor: string}>`
  border-radius: 5px;
  height: 350px;
  width: 250px;
  flex-flow: row;
  display:flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items:center;
  justify-content: center;
  background: ${({$backgroundColor})=> $backgroundColor};
  color: black;
`;

const Column = styled.div<{$alignLeft?: boolean}>`
  display:flex;
  flex-flow: column;
  align-items: ${({$alignLeft}) => $alignLeft ? "flex-end" : "flex-start"};
`

const InfoContainer = styled.div`
  display:flex;
  background-color: #ffffff70;
  border-radius: 5px;
  height: 70%;
  width: 70%;
  justify-content: center;
  align-items: center;
`