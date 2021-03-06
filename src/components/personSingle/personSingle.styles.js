import styled from "styled-components";
let percentage = 50;

export const PersonSingleStyled = styled.div`
  flex-basis: ${({ peopleNumber }) => {
    // if (peopleNumber < 5) return 50;
    // else {
    //   return 20;
    // }
    const width = 100 - peopleNumber * 10;
    return width < 20 ? 20 : width > 50 ? 50 : width;
  }}%;
  flex-grow: 0.5;
  /* flex-grow: 0.3; */

  padding: 10px;

  position: relative;

  /* background-color: red; */
  /* flex-basis: ${({ peopleNumber }) => 5 * peopleNumber}%; */
  /* width: ${({ peopleNumber }) => `calc(50vh / ${peopleNumber / 5})`}; */

  .person-single__img {
    height: ${({ peopleNumber }) =>
      `calc((50vh - 112px) / ${
        peopleNumber /
        (100 / (100 - peopleNumber * 10 < 20 ? 20 : 100 - peopleNumber * 10))
      })`};

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("${({ img }) => (img ? img : "")}");
  }

  .person-single__name {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > div {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      color: white;
      padding: 0 3px;
      font-size: 0.7em;
    }
  }
`;
