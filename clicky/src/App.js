import React, { Component } from 'react';
import Footer from "./components/Footer";
import FriendCard from "./components/FriendCard";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import animal from "./animal.json"

import './App.css';


class App extends Component {
   state = {
    animal,
    clickedAnimal: [],
    score: 0

  };

 //clicking on card selects animal from Array
  imageClick = event => {
    const currentAnimal = event.target.alt;
    const AnimalAlreadyClicked = 
      this.state.clickedAnimal.indexOf(currentAnimal) > -1;

  //if animal clicked twice game is reset
    if (AnimalAlreadyClicked) {
      this.setState({
        animal: this.state.animal.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedAnimal: [],
        score: 0
      });
      alert("HaHaHaHaHa!You lose! Play again!");

    } else {
      this.setState( 
      {
        animal: this.state.animal.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedAnimal: this.state.clickedAnimal.concat(
          currentAnimal
          ),
        score: this.state.score +1
      },

  //if you get all 12 friends correct game resets

    () => {
      if (this.state.score === 12) {
        alert("You win! Congratulations!");
        this.setState({
          animal: this.state.animal.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedAnimal: [],
          score: 0
          });
        }
      }
    );
  }
};

//components to be rendered navbar, jumbotron, friendcard, footer
render() {
  return (
    <div>
      <Navbar 
        score={this.state.score} 

     />   
      <Jumbotron />
      <div className="wrapper">
        {this.state.animal.map(animal => (
           <FriendCard
              imageClick={this.imageClick}
              id={animal.id}
              key={animal.id}
              image={animal.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
