import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {posts:[]};
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts:data}));
    }
  render() {
    return (
      <div>
          <Card.Group>

        {this.state.posts.map(item => (
            <Card
            header={item.title}
            description={item.body}
          />
        ))}
          </Card.Group>
      </div>
    )
  }
}
