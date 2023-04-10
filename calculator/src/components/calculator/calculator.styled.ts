import styled from 'styled-components';

const S = {
  container: styled.section`
    display: flex;
    /* width: 80vw; */
    justify-content: center;
  `,
  leftContainer: styled.div`
    width: 70%;
    border-right: 1px solid black;
    padding-right: 10px;
  `,
  rightContainer: styled.div`
    width: 30%;
    padding-left: 10px;
  `,
};

export default S;
