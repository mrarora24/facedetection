import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './component/Navigation/Navigation';
import SignIn from './component/SignIn/SignIn';
import Register from './component/Register/Register';
import Logo from './component/Logo/Logo';
import Rank from './component/Rank/Rank';
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './component/FaceRecognition/FaceRecognition';
import ParObtions from './component/Particles/parObtions';
import './App.css';



const app = new Clarifai.App({
 apiKey: 'c7c528ea941b4451bb985edb8e978d67'
});


class App extends Component {
  constructor() {
    super();
      this.state= {
        input: '',
        imageUrl: '',
        box: {},
        route: 'signin'
      }
    }


   displayFaceBox = (box) => {
      console.log(box)
       this.setState({box});
    }

 
      onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }
 

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(height,width);
    return {
      
    
      topRow: 500 +  (clarifaiFace.top_row*height) ,
      leftCol:   40 + (clarifaiFace.left_col*width),
      bottomRow: - ( clarifaiFace.bottom_row * height ),
      rightCol: width - ( clarifaiFace.right_col*width ) ,
      
      
    }
      
  } 

  

  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL ,
      this.state.input)
    .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
     .catch(err=>console.log(err));
  
      
  }

  onRouteChange=(route)=>{
    this.setState({route:route})
  }

  render() {
    const {route, imageUrl, box }=this.state;
    return(
          <div className="App">
    <Particles className='particle'
    params={this.parObtions}/>


       <Navigation onRouteChange = {this.onRouteChange}/>
        {route === 'home'
        ?<div>
        <Logo/>
        <Rank/>
        
           <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition
        box={box}
        imageUrl={imageUrl}
        />
      </div>
          :(   route === 'signin'
               ?<SignIn onRouteChange={this.onRouteChange}/>
               :<Register onRouteChange= {this.onRouteChange}/>

           )
    }
     </div>
    );
  }
}


export default App;
