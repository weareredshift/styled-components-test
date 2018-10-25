import React, { Component } from 'react';
import { AppWrapper, Button, ColumnComponent, Container } from './AppStyles';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import BaseStyles from 'styles/global/BaseStyles'
import FontStyles from 'styles/global/FontStyles';
import { Col } from 'styles/layout';
import { initReduxBreakpoints } from 'utils/responsiveHelpers';
import { setActiveBreakpoint } from 'redux/actions';
import { connect } from 'react-redux';
import { setValue, bpIsLessThan } from 'utils/responsiveHelpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primaryColor: theme.colors.teal,
      secondaryColor: theme.colors.yellow,
      buttonType: 'span'
    };

    this.mediaQueryState = [];
  }

  // Create the event handler inside componentDidMount
  componentDidMount() {
    initReduxBreakpoints.call(this);
  }

  render() {
    const { bp } = this.props;
    return (
      <ThemeProvider theme={ theme }>
        <Container as="section">
          <BaseStyles /><FontStyles />

          <ColumnComponent span={ setValue({ def: 4, mlg: 6 }, bp) }>
            Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget.
          </ColumnComponent>

          <Col span={ setValue({ def: 4, mlg: 6 }, bp) } last={ bpIsLessThan('mlg', bp) }>
            Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget.
          </Col>

          <Col span={ setValue({ def: 4, mlg: 12 }, bp) } last>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
          </Col>

          <AppWrapper>
            <h1>Test h1</h1>
            <Button
              color={ this.state.primaryColor }
              onClick={ () => this.setState({ primaryColor: theme.colors.yellow }) }
            >Primary button</Button>
            <Button
              as={ this.state.buttonType }
              inverted
              color={ this.state.secondaryColor }
              onClick={ () => this.setState({ secondaryColor: theme.colors.teal, buttonType: 'a' }) }
            >Secondary button</Button>
            <span className="typ--h1">H1 test</span>
          </AppWrapper>        
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  bp: state.breakpoint
});

const mapDispatchToProps = { setActiveBreakpoint };

export default connect(mapStateToProps, mapDispatchToProps)(App);
