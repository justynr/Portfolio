import styled from 'styled-components';

const CardContainer = styled.div`
  .flex-container {
    cursor: pointer;
    display: flex;
    height: 400px;
  }
  h2.home {
    margin-top: 0;
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
    padding: 60px;
  }
  .text-left {
    background-color: var(--darkTheme);
    text-align: right;
    padding: 60px;
  }

  .pic {
    width: 100;
  }

  .topCardLeft {
    border-radius: 100px 0px 0px 0px;
  }
  .topCardRight {
    border-radius: 0px 100px 0px 0px;
  }

  .bottPicLeft {
    border-radius: 0px 0px 0px 100px;
  }

  .bottPicRight {
    border-radius: 0px 0px 100px 0px;
  }

  .bottTextLeft {
    border-radius: 0px 0px 0px 100px;
  }

  .bottTextRight {
    border-radius: 0px 0px 100px 0px;
  }
`;

const Picture = styled.img`
  /* height: 500px; */
  width: 100;
  background-color: blue;
`;

export { CardContainer, Picture };
