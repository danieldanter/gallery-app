import React from 'react'
import PhotoContainer from '../PhotoContainer';


const SearchT = ({match}) => {

    let name = match.params.name;

    return (
      <PhotoContainer data ={name}/>
    );
}

export default SearchT;