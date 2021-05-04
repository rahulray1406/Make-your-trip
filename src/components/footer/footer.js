import React from 'react';

const footer = () => {
    return (
        <footer class="page-footer bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 py-5">
                        <div class="mb-5">
                            <center>
                                <a class="fb ">
                                    <i class="fab fa-facebook fa-lg t mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="tw">
                                    <i class="fab fa-twitter fa-lg t mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="gplus">
                                    <i class="fab fa-google-plus fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="li">
                                    <i class="fab fa-linkedin fa-lg t mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                                <a class="ins">
                                    <i class="fab fa-instagram fa-lg t mr-md-5 mr-3 fa-2x"> </i>
                                </a>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright  text-center py-3 ">&#169; 2020 Copyright:
                    <a href="https://make-your-trip.herokuapp.com/"> Make Your Trip</a>
            </div>
        </footer>
    );
}
export default footer;
