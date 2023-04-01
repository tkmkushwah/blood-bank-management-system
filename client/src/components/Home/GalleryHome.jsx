import React from 'react'
import HomeGallary1 from '../../assets/HomeGallary1.png'
import HomeGallary2 from '../../assets/HomeGallary2.jpg'
import HomeGallary3 from '../../assets/HomeGallary3.jpg'
import '../../styles/gallery.scss'
const GalleryHome = () => {
  return (
    <section className='gallery'>
      <div className="title">
        <h1 style={{ textAlign: "center",paddingTop:'30px' }}>Gallery</h1>
      </div>
      <div className="images">
        <img src={HomeGallary1} alt="ojioajpf" />
        <img src={HomeGallary2} alt="jadio" />
        <img src={HomeGallary3} alt="ajf'oaj" />
      </div>
    </section>
  );
}

export default GalleryHome