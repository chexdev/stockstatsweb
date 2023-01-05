import React from "react";
import NavBar from "./NavBar";

function Features() {
    return (
        <div class ="container">
            <NavBar />
            <section class="jumbotron text-center py-3 my-3 mx-3 bg-dark">
                <div class="container">
                    <h2 class="display-6 text-light my-3">App Features</h2>
                    <p class="lead text-light">The latest version of the stock statistics app. </p>
                    <p class="lead text-light"> Take a look at the newest features, right now. </p>
                    <p>
                        <a href="/" class="btn btn-primary my-2 mx-2">Use Stock App</a>
                        <a href="./Feedback" class="btn btn-info my-2 mx-2">Feedback</a>
                    </p>
                </div>
            </section>
            <div class="album py-5 bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="/images/search.png" alt="image">
                                </img>
                                <div class="card-body">
                                    <p class="card-text text-center text-dark">
                                        Search and Filter
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        </div>
                                        <small class="text-muted">3 min read</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="/images/mobile.png" alt="image">
                                </img>
                                <div class="card-body">
                                    <p class="card-text text-center text-dark">
                                        Mobile Application (Coming Soon)
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        </div>
                                        <small class="text-muted">2 min read</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" src="/images/chart.png" alt="image">
                                </img>
                                <div class="card-body">
                                    <p class="card-text text-center text-dark">
                                        Integrated Charts (Coming Soon)
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        </div>
                                        <small class="text-muted">4 min read</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    )


}

export default Features;