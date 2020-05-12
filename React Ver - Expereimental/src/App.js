import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { useMonetizationState, 
   IfWebMonetized , 
   IfNotWebMonetized,
  IfWebMonetizationPending
 } from 'react-web-monetization'
import { Jumbotron, ListGroup, Button, ListGroupItem, Row,Col, Badge } from 'reactstrap';

class App extends  Component {
  constructor(props) {
    super(props);


    this.state = {
      date: new Date(),
      tracks: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    const musictracks = ['1 - Oh Yeah','2 - Oh No','3 I like you','4 - Woo Woo','5 - Mad Science']
    this.setState({tracks : musictracks});
  }

  handleClick(track, index) {
    //write function to enable a track 
   console.log(track, index);
  }


  render() {
    const App = props => {
      const monetization = useMonetizationState()
    }

  return (

<div>
  
      <Jumbotron fluid>
    <div className="container">
      <h3>Monetize Tracks</h3>
    </div>
    </Jumbotron>
    <div className="container">
      <Row>
        <Col>
        <h4>Album by MusicStar</h4>
        <ul className = "ListTracks">
          {this.state.tracks.map((track, index) =>
          <li className = "ListTracks" key={index} disabled tag="a" href="#">{track} 
            <Button  className="float-right"
            onClick={() => {this.handleClick(track, index)}}>
              <Badge color="secondary" >  </Badge>
            </Button>
            <div className="fullW"><audio controls></audio></div>
          </li>
           )}
      </ul>>
        </Col>
      <Col>
      <h4>AlbumArt</h4>
   
      <img src ="logo512.png" className="img-fluid" alt ="album art" />
      </Col>
      </Row>
    </div>
    </div>
  );
}
}
export default App;
