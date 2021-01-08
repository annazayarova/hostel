import React from 'react';

import GalleryContainer from './GalleryContainer';

import rooms1 from '../../img/gallery/rooms/rooms1.jpg';
import rooms3 from '../../img/gallery/rooms/rooms3.jpg';
import rooms4 from '../../img/gallery/rooms/rooms4.jpg';
import rooms5 from '../../img/gallery/rooms/rooms5.jpg';
import rooms7 from '../../img/gallery/rooms/rooms7.jpg';
import rooms8 from '../../img/gallery/rooms/rooms8.jpg';
import rooms9 from '../../img/gallery/rooms/rooms9.jpg';
import rooms10 from '../../img/gallery/rooms/rooms10.jpg';
import rooms11 from '../../img/gallery/rooms/rooms11.jpg';
import rooms13 from '../../img/gallery/rooms/rooms13.jpg';

const images = [ rooms1, rooms3, rooms4, rooms5, rooms7, rooms8, rooms9, rooms10, rooms11, rooms13 ];

const Rooms = () => {
    return (
        <GalleryContainer images={ images }
            title="Rooms"
            subtitle="The rooms in our hostel are bright and spacious, accommodation in dorms with 4-6 beds. All rooms have direct access to a balcony with garden view. Towel and socket adaptors are provided free of charge"
        />
    );
}

export default Rooms;
