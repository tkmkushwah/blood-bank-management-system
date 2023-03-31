import React from 'react'
import img1 from '../../assets/img1.jpg'
const GalleryHome = () => {
  return (
    <>
      <div className="title"> <h1 style={{margin:"0 auto"}}>Gallery</h1></div>
      <div className="images">
        <img src={img1} alt="ojioajpf" />
        <img src={img1} alt="jadio" />
        <img src={img1} alt="ajf'oaj" />
      </div>
    </>
  );
}

export default GalleryHome