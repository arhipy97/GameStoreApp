// @ts-ignore
import styled from 'styled-components/native';

interface Identifier {
  [key: string]: boolean;
}

export const Text = styled.Text`
  font-family: "Avenir Next";
  color: ${props => props.color ?? '#ffffff'};

  ${({title, large, medium, small}: Identifier) => {
    switch (true) {
      case title:
        return 'font-size: 32px';
      case large:
        return 'font-size: 20px';
      case medium:
        return 'font-size: 16px';
      case small:
        return 'font-size: 13px';
      default:
        return 'font-size: 14px';
    }
  }};

  ${({light, bold, heavy}: Identifier) => {
    switch (true) {
      case light:
        return 'font-weight: 200;';
      case bold:
        return 'font-weight: 600;';
      case heavy:
        return 'font-weight: 700;';
      default:
        return 'font-weight: 400;';
    }
  }};

  ${({center, right}: Identifier) => {
    switch (true) {
      case center:
        return 'text-align: center';
      case right:
        return 'text-align: right';
      default:
        return 'text-align: left';
    }
  }};
};
`;
