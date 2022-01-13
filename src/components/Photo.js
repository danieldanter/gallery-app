import React from 'react'


const Photo = (props) => {
    
    const im = `https://live.staticflickr.com/${props.obj.server}/${props.obj.id}_${props.obj.secret}_c.jpg`
    const altP = props.obj.title

    //console.log(props.obj)
    //console.log(im)
    return (
        <li>
            <img src={im} alt= {altP}/>
        </li>
    );
}

export default Photo;