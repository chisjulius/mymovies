import React from 'react'

const Footer = () =>{
    return (
        <div>
             <footer className="page-footer grey darken-3">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 l6  scrollspy">
                                <h5>About</h5>
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. vel, repellendus!"</p>
                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. vel, repellendus!"</p>
                            </div>
                            <div className="col s12 l4 offset-l2">
                                <h5>Connect</h5>
                                <ul>
                                    <li><a href="#" className="grey-text text-lighten-3">Facebook</a></li>
                                    <li><a href="#" className="grey-text text-lighten-3">Instagram</a></li>
                                    <li><a href="#" className="grey-text text-lighten-3">Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright grey darken-4">
                        <div className="container center-align">&copy; 2020 Chisom Julius</div>
                    </div>
                </footer>
        </div>
    )
}

export default Footer