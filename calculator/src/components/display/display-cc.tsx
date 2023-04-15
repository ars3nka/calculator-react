import { Component } from 'react';
import S from './display.styled';
import { DisplayPropsType } from './display-fc';

class DisplayCC extends Component<DisplayPropsType> {
  render() {
    const { calculationsInput, setCalculationsInput, currentNumber, result } = this.props;

    return (
      <S.container>
        <S.calculatorInput
          type='text'
          value={calculationsInput + currentNumber}
          onChange={(e) => setCalculationsInput(e.target.value)}
        />
        <div>{result}</div>
      </S.container>
    );
  }
}

export default DisplayCC;
