import React, { useRef, useEffect } from 'react';

import './Map.css';

//Attention!!!
//You need add identity key from google in to index.html(
//<script
//src="https://maps.googleapis.com/maps/api/js?key= yor Key like BIzdgTyddGg43fg2D3hjywWfvsSwWh4H'
//> </script>) for work google maps!!!

const Map = (props) => {
    const mapRef = useRef();
    const {center, zoom} = props;

    useEffect(()=>{
        const map = new window.google.maps.Map(mapRef.current,{
            center: center,
            zoo: zoom,
        });
        new window.google.maps.Marker({position:props.center, map: map })
    },[center, zoom]);

    return <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>;
};

export default Map;
