import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slideshow.css';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {

  const slideImages  = [
    '/images/คาเฟ่1.jpg',
    '/images/คาเฟ่2.jpg',
    '/images/คาเฟ่3.jpg'
  ]

  const style = {height: 350, width: 1000};
    return (
      <div >
        <div className="text-center">
          <br></br>
          <h2>ยินดีต้อนรับเข้าสู่ร้าน แพ~โก~พา</h2>
        </div>

        <Slide easing="ease">
          <div className="each-slide mt-4">
            <div>
              <img style={style} src="/images/คาเฟ่1.jpg" alt=""/>
            </div>
          </div>
          <div className="each-slide mt-2">
            <div >
            <img style={style} src="/images/คาเฟ่2.jpg" alt=""/>
            </div>
          </div>
          <div className="each-slide mt-2">
            <div >
            <img style={style} src="/images/คาเฟ่3.jpg" alt=""/>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;