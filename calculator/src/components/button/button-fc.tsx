import S from './button.styled';

export interface CalculatorButtonProps {
  value: string;
  type: string;
  keypadHandler: (value: string, type: string) => void;
}

const CalculatorButtonFC = ({ value, type, keypadHandler }: CalculatorButtonProps) => (
  <S.button data-test-id='calculator-button' onClick={() => keypadHandler(value, type)}>
    {value}
  </S.button>
);

export default CalculatorButtonFC;
