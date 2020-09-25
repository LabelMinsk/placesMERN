import React from 'react'
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: '1',
        title: 'Minsk',
        description: 'The capital of Republic of Belarus!',
        imageUrl:
          'https://photoclub.by/images/main46/464643_main.jpg',
        address: 'Center of Europe',
        location: {
          lat: 53.8847208,
          lng: 27.5233292
        },
        creator: '1'
      },
      {
        id: '2',
        title: 'Moscow',
        description: 'The capital of Russian Federation!',
        imageUrl:
          'https://evo-rus.com/wp-content/uploads/2020/04/regnum_picture_1449389987629009_normal.jpg',
        address: 'Near Belarus=)',
        location: {
          lat: 55.5815245,
          lng: 36.8251409
        },
        creator: '2'
      }
];

const UserPlaces = (props) =>{
    const userId = useParams().userId;
    const userPlaces = DUMMY_PLACES.filter(place=>place.creator === userId);
    return <PlaceList  items={userPlaces}/>
}

export default UserPlaces;