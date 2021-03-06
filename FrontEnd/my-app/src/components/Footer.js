import React from 'react';

const Footer = (props) => {
    const {company, tel} = props;

    return(
        <div className="container-fluid" >
            <hr />
            <footer className='footer mt-auto py-3'>
            <div className="text-center titel text-uppercase">
                <small>
                <span className="text-danger">Power By {company}</span> |<span className="text-muted">Contact By Tel : {tel}</span>
                </small>
            </div>
            </footer>
        </div>
    )
}

export default Footer;