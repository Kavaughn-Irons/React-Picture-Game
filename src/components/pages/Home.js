import React, { Component } from "react";
import CartmanPic from "../../Assets/Cartman.jpg"
import BugsPic from "../../Assets/Bugs.jpg"
import FryPic from "../../Assets/Fry.jpg"
import RickPic from "../../Assets/Rick.jpg"

const containerStyle = {
marginTop : '50px'
}

const imageStyle = {
width : '300px',
height : '300px' 
}



class Home extends Component {



constructor(){

  const CartmanPath = window.location.origin+CartmanPic
  const BugsPath = window.location.origin+BugsPic
  const FryPath = window.location.origin+FryPic
  const RickPath = window.location.origin+RickPic

super()
  this.state = {

   characterarray : ["https://bit.ly/2V8ZWjE","https://bit.ly/2OrbCx5","https://bit.ly/2VeKzX8","https://bit.ly/2VO5zUM","https://bit.ly/2qf2mlk",CartmanPath,BugsPath,FryPath,RickPath],
   StewieObj : {Stewie : 0},
   RogerObj :{Roger : 0},
   BartObj : {Bart : 0},
   AangObj : {Aang : 0},
   SpongebobObj : {Spongebob : 0},
   CartmanObj : {Cartman : 0},
   BugsObj : {Bugs : 0},
   FryObj : {Fry : 0},
   RickObj : {Rick : 0},
   score : 0,
   lost : false,
   CartmanPathTwo : CartmanPath,
   BugsPathTwo : BugsPath,
   FryPathTwo : FryPath,
   RickPathTwo : RickPath,
   gameState : ''

  }

  this.shuffle = this.shuffle.bind(this)
  this.scoreAdder = this.scoreAdder.bind(this)
  this.scoreMaker = this.scoreMaker.bind(this)
  this.shuffleAssign = this.shuffleAssign.bind(this)
  this.boxOne = this.boxOne.bind(this)
  this.boxTwo = this.boxTwo.bind(this)
  this.boxThree= this.boxThree.bind(this)
  this.boxFour = this.boxFour.bind(this)
  this.boxFive = this.boxFive.bind(this)
  this.boxSix = this.boxSix.bind(this)
  this.boxSeven = this.boxSeven.bind(this)
  this.boxEight = this.boxEight.bind(this)
  this.boxNine = this.boxNine.bind(this)
  this.restart = this.restart.bind(this)

}

restart(){
window.location.reload();
}

shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}



scoreAdder(givenObject,name){

let objValue = Object.values(givenObject)[0]
let objName = Object.keys(givenObject)[0]
let newValue = this.state[name][objName] + 1
let newScore = this.state.score+1

let {lost, score} = this.state

objValue > 0 || lost === true ? this.setState({lost : true}) : this.setState({[name] : {[objName] : newValue}})
objValue > 0 || lost === true ? this.setState({lost : true}) : this.setState({score: newScore})
newScore === 9 ? this.setState({gameState : 'Winner!'}) : console.log("might lose!")
objValue > 0 && this.state.gameState !== 'Winner!' || lost === true && this.state.gameState !== 'Winner!' ? this.setState({gameState : 'Loser!'}) : console.log("still winning!")
console.log(objValue)
console.log(objName)



}

scoreMaker(image){

const {scoreAdder} = this 
const { StewieObj, RogerObj, BartObj, AangObj, SpongebobObj, CartmanObj, BugsObj, FryObj, RickObj} = this.state
const {CartmanPathTwo,BugsPathTwo,FryPathTwo,RickPathTwo} = this.state

switch(image){
case "https://bit.ly/2V8ZWjE" : scoreAdder(StewieObj,"StewieObj")
break
case "https://bit.ly/2OrbCx5" : scoreAdder(RogerObj,"RogerObj")
break
case "https://bit.ly/2VeKzX8" : scoreAdder(BartObj,"BartObj")
break
case "https://bit.ly/2VO5zUM" : scoreAdder(AangObj,"AangObj")
break
case "https://bit.ly/2qf2mlk" : scoreAdder(SpongebobObj,"SpongebobObj")
break
case CartmanPathTwo : scoreAdder(CartmanObj,"CartmanObj")
break
case BugsPathTwo : scoreAdder(BugsObj,"BugsObj")
break
case FryPathTwo : scoreAdder(FryObj,"FryObj")
break
case RickPathTwo : scoreAdder(RickObj,"RickObj")
break
}

}

shuffleAssign(){
this.setState({characterarray : this.shuffle(this.state.characterarray) }) 
}

boxOne(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

boxTwo(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

boxThree(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

boxFour(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

boxFive(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

boxSix(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

boxSeven(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

boxEight(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

boxNine(event){
this.scoreMaker(event.target.src)
this.shuffleAssign()
}

render() {
  
const {boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine, scoreAdder, scoreMaker, restart} = this
const {characterarray,score,gameState} = this.state

    return (
      <div>
      <div style={containerStyle} className="container">

        
        <div style={{marginTop : '30px',marginBottom : '30px'}} className="row">

          <div className="col-xl-4 text-center">
          <h1>{gameState}</h1>
          </div>

          <div className="col-xl-4 text-center">
          <h3>Score: {score}</h3>
          </div>

          <div className="col-xl-4 text-center">
          <button type="button" class="btn btn-danger" onClick={restart}>restart</button>
          </div>

        </div>
        
        <div className="row">

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[0]} alt='Game Image' onClick={this.boxOne.bind()}></img>
          </div>

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[1]}alt='Game Image' onClick={boxTwo}></img>
          </div>

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[2]} alt='Game Image' onClick={boxThree}></img>
          </div>

        </div>

        <div style={containerStyle} className="row">

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[3]} alt='Game Image' onClick={boxFour}></img>
          </div>

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[4]} alt='Game Image' onClick={boxFive}></img>
          </div>

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[5]} alt='Game Image' onClick={boxSix}></img>
          </div>

        </div>
        
        <div style={{marginTop : '50px', marginBottom : '50px'}} className="row">

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[6]} sPialt='Game Image' onClick={boxSeven}></img>
          </div>

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[7]} alt='Game Image' onClick={boxEight}></img>
          </div>

          <div className="col-xl-4">
          <img style={imageStyle} src={characterarray[8]}alt='Game Image' onClick={boxNine}></img>
          </div>

        </div>

      </div>

      </div>
    );
  }

}

export default Home;
