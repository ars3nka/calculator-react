import styled from 'styled-components';
import { styles } from '../../styles/global-style';

const S = {
  container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  `,
  button: styled.button`
    ${styles.button};
    height: 40px;
  `,
  select: styled.select`
    font-size: 16px;
    height: 25px;
    color: ${({ theme }) => theme.text};
    background-color: transparent;
  `,
};

export default S;
