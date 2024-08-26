import React from 'react';
import GalleryCards from './GalleryCards';

const Gallery = () => {
  return (
    <>
    <a className='anchor' id='gallery-section'></a>
    <div className='content' id='gallery-content'>
      <div id="gallery-div">
        <div className='wrapper'>
        <h2 className="section-header">Photos Of Our Work</h2>
            <GalleryCards />
          </div>
        </div>
    </div>
    </>
  )
}

export default Gallery;