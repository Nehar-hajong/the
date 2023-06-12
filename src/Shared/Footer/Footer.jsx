import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-20">
            <div>
                <span className="footer-title ">GoWilds</span>
                <p className='w-56'>to take rtivila example which us ever undertakes laborious physica exercise except obsome.</p>
            </div>
            <div>
                <span className="footer-title">Pages</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Community blog</a>
                <a className="link link-hover">Work with us</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Contact us</a>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text w-3/4">Subscribe our newsletter to get our latest update & news</span>
                    </label>
                    <div className="relative">
                        <input type="text" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Update</button>
                        <p>i agree to all terms and policies</p>
                    </div>
                </div>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <div className='flex'>
                    <img src="" alt="" />
                    <div>
                        <p>Drop a Link</p>
                        <p>+00(123)456889</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src="" alt="" />
                    <div>
                        <p>Email Address</p>
                        <p>contact@exanple.com</p>
                    </div>
                    </div>
                <div className='flex'>
                    <img src="" alt="" />
                    <div>
                        <p>Visit office</p>
                        <p>583 Main Street, NY,USA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;