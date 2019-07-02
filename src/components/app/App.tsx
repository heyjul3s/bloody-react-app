import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { color } from 'styled-system';
import theme from '../../theme';

const StyledHeader = styled.header`
  display: block;
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  ${color}
`;

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StyledHeader>
            <h1>Hello There.</h1>
          </StyledHeader>

          <StyledParagraph color="black">
            Much work needs to be done. You may start your journey to world
            domination from <code>src/components/App.tsx</code>.
          </StyledParagraph>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
