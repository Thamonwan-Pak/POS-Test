import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return(
        <div>
            <Header />
            
            <div className="containner col-md-5 mt-3">
                <h1>ยินดีต้อนรับเข้าสู่ร้าน แพ-โก-พา</h1>
            </div>

            <Footer company="แพ-โก-พา" tel="02-96523516"/>

        </div>
    )
}

export default About;