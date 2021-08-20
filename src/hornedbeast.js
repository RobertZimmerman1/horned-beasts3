// Import Links --------------------------------------------------------------------------------
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';

//Component: Constructor Function with Initial State -----------------------------------------------------
class Hornedbeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLikes: 0
    };
  }

  //Function to Count Likes --------------------------------------------------------------------------

  likesCounter = () => {
    this.setState({currentLikes: this.state.currentLikes + 1});
  }

  //Information for Rendering Hornedbeast when Called ---------------------------------------------
  render() {
    return (
      <Card 
        style={{ width: '400px' }}
        onClick={this.likesCounter}>
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            <img src='https://assets.ldscdn.org/a4/5f/a45f14a311bfb46725bfae0b360cc0d217496cb31061391/heart.jpeg' height='30px' /><p>Current Number of Likes: {this.state.currentLikes}</p>
          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>

    );
  } 
}

export default Hornedbeasts;

