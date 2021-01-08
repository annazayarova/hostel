import React from 'react';

import GalleryContainer from './GalleryContainer';

import kitchen1 from '../../img/gallery/kitchen/kitchen1.jpg';
import kitchen2 from '../../img/gallery/kitchen/kitchen2.jpg';
import kitchen3 from '../../img/gallery/kitchen/kitchen3.jpg';

const images = [ kitchen1, kitchen2, kitchen3 ];

const subTitle = `Hostel has a fully equipped kitchen where you can store and cook your food.
We provide free tea and coffee`

const Kitchen = () => {
    return (
        <GalleryContainer images={ images }
            title="Kitchen"
            subtitle={ subTitle }
        />
    );
}

export default Kitchen;
