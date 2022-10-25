import React, {memo} from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-dark">
            <div className="container footer-contact">
                <div className="row ">
                    <div className="col-md-7 col-lg-4 mb-lg-0 pt-3">
                        <h5 className="text-3 mb-3">INTEGRALY</h5>
                    </div>
                    <div className="col-md-5 col-lg-3 mb-lg-0 pt-3">
                        <ul className="list list-icons list-icons-lg">
                            <li className="mb-1 nav-link"><i className="far fa-dot-circle m-1 p-2"></i>Buenos Aires, Argentina</li>
                            <li className="mb-1 nav-link"><i className="far fa-envelope m-1 p-2"></i>ventas@integraly.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default memo(Footer);
