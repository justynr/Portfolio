import styled from 'styled-components';

const CardContainer = styled.div`
  .flex-container {
    cursor: pointer;
    display: flex;
  }
  .odd {
    flex-direction: row;
  }
  .even {
    flex-direction: row-reverse;
  }
  .flex-container > div {
    /* width: 500px; */
    flex-basis: 50%;
  }
  .text {
    background-color: var(--darkTheme);
    padding: 1rem 2rem;
  }
`;

export default CardContainer;
