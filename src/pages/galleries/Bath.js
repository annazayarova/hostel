import React from 'react';

import GalleryContainer from './GalleryContainer';

import bath1 from '../../img/gallery/bath/bath1.jpg';
import bath2 from '../../img/gallery/bath/bath2.jpg';
import bath3 from '../../img/gallery/bath/bath3.jpg';
import bath4 from '../../img/gallery/bath/bath4.jpg';
const images = [ bath1, bath2, bath4, bath3 ];

const Bath = () => {
    return (
        <GalleryContainer images={ images }
            title="Bath"
            subtitle="We have two shower rooms with high pressure hot water. Shower gel and shampoo are provided free of charge. Hair dryer can be found at reception"
        />
    );
}

export default Bath;
