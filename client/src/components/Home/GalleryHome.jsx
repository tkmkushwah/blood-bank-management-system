import React from 'react'
import img1 from '../../assets/img1.jpg'
import '../../styles/gallery.scss'
const GalleryHome = () => {
  return (
    <section className='gallery'>
      <div className="title">
        <h1 style={{ textAlign: "center",paddingTop:'30px' }}>Gallery</h1>
      </div>
      <div className="images">
        <img src={img1} alt="ojioajpf" />
        <img src={img1} alt="jadio" />
        <img src={img1} alt="ajf'oaj" />
      </div>
    </section>
  );
}

export default GalleryHome