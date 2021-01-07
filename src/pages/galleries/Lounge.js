import React from 'react';

import GalleryContainer from './GalleryContainer';

import lounge1 from '../../img/gallery/lounge/lounge1.jpg';
import lounge2 from '../../img/gallery/lounge/lounge2.jpg';
import lounge3 from '../../img/gallery/lounge/lounge3.jpg';
import lounge4 from '../../img/gallery/lounge/lounge4.jpg';
import lounge5 from '../../img/gallery/lounge/lounge5.jpg';

const images = [ lounge4, lounge5, lounge2, lounge1, lounge3 ];

const Lounge = () => {
    return (
        <GalleryContainer images={ images }
            title="Lounge"
        />
    );
}

export default Lounge;
