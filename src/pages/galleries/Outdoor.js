import React from 'react';

import GalleryContainer from './GalleryContainer';

import outdoor1 from '../../img/gallery/outdoor/outdoor1.jpg';

const images = [ outdoor1 ];

const Outdoor = () => {
    return (
        <GalleryContainer images={ images }
            title="Outdoor"
        />
    );
}

export default Outdoor;
