import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          Project Name
        </Menu.Item>
        <Menu.Item as='a'><Link to="/contact">Contact Us</Link></Menu.Item>
        <Menu.Item as='a'><Link to="/About">About</Link></Menu.Item>
        <Menu.Item as='a'><Link to="/products">Product List</Link></Menu.Item>
        <Menu.Item as='a'><Link to="/posts">Posts</Link></Menu.Item>
      </Container>
    </Menu>
      {/* Test for git commit */}
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Semantic UI React Fixed Template</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>
        A text container is used for the main container, which is useful for single column layouts.
      </p>
      <Routes />
     
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 1' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Footer Header' />
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>
  </div>

        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ul className="main-menu">
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/About">About ReactJS</Link>
            </li>
            <li>
             <Link to="/products">Product List</Link>
            </li>
          </ul>
          <Routes />
        </div> */}
      </BrowserRouter>
    );
  }
}

export default App;
