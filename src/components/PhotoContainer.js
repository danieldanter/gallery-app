import Photo from './Photo';
import React, { Component } from 'react';
import apiKey from '../config';


class PhotoContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      pics: []
    }
  }
      
  componentDidMount() {
    fetch( `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.data}&per_page=24&format=json&nojsoncallback=1` )
        .then(response => response.json())
        .then(responseData => {
          this.setState({pics: responseData.photos.photo});
        })
        .catch(error =>{
          console.log('Error fetching and parsing data', error);
        } )
  }

  render() {

    var pics = this.state.pics.map(pic =>
      
      <Photo obj ={pic} key={pic.id}/>
    );



    return (
        <div className="photo-container">
        <h2>{this.props.data}</h2>
        <ul>
        {pics}
        
        </ul>
      </div>
    );
  }  
}

export default PhotoContainer;