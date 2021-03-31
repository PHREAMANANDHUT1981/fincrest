import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import offImg from './Images/Artboard – 1.png';
import backgrdImg from './Images/Artboard – 4.png';
import cardImg4 from './Images/Artboard – 18.png';
import cardImg3 from './Images/Artboard – 19.png';
import cardImg2 from './Images/Artboard – 20.png';
import cardImg1 from './Images/Artboard – 21.png';
import lastcardImg from './Images/Artboard – 5.png';

function services(){
    return <div style={{ backgroundColor: 'black', color: 'white', backgroundImage: `url("${backgrdImg}")` }}>
        <div className='container'>
            <div className='row justify-content-center' style={{ paddingTop: 50, paddingBottom: 50 }}>

                <div className='col-md-12'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book.</p>
                </div>
            </div>
            <div className='row justify-content-center' style={{ paddingTop: 50, paddingBottom: 50 }}>

                <div className='col-md-3'>
                    <div className="card text-dark bg-light mb-3 position-relative" style={{ padding: 5 }}>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ marginRight: 50, marginLeft: 70, marginTop: -80, height:100, width:100 }}><img src={cardImg1} class="card-img-top" alt="office"></img></span>
                        <div className="card-body">
                            <h5 className="card-title">Tax Returns</h5>
                            <p className="card-text">Lorem Ipsum is
                            simply dummy text of
                            the printing and
                            typesetting industry.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-dark bg-light mb-3 position-relative" style={{ padding: 5 }}>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ marginRight: 50, marginLeft: 70, marginTop: -80, height:100, width:100 }}><img src={cardImg2} class="card-img-top" alt="office"></img></span>
                        <div className="card-body">
                            <h5 className="card-title">Tax Advice</h5>
                            <p className="card-text">Lorem Ipsum is
                            simply dummy text of
                            the printing and
                             typesetting industry.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-dark bg-light mb-3 position-relative" style={{ padding: 5 }}>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ marginRight: 50, marginLeft: 70, marginTop: -80, height:100, width:100 }}><img src={cardImg3} class="card-img-top" alt="office"></img></span>
                        <div className="card-body">
                            <h5 className="card-title">Business Services</h5>
                            <p className="card-text">Lorem Ipsum is
                            simply dummy text of
                            the printing and
                             typesetting industry.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className="card text-dark bg-light mb-3 position-relative" style={{ padding: 5 }}>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ marginRight: 50, marginLeft: 70, marginTop: -80, height:100, width:100 }}><img src={cardImg4} class="card-img-top" alt="office"></img></span>
                        <div className="card-body">
                            <h5 className="card-title">Home Loans</h5>
                            <p className="card-text">Lorem Ipsum is
                            simply dummy text of
                            the printing and
                             typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center' style={{ paddingTop: 0, paddingBottom: 50, paddingLeft:200 }}>
             
                <div className="card mb-3" style={{maxWidth: 740}}>
                <div className="row g-0"> 
                <div className="col-md-4" style={{padding:30,paddingTop:50}}>                                
                    <img src={lastcardImg} className="card-img-top" alt="lastcard"></img>
                 </div>
                 <div className="col-md-8">
                                    <div className="card-body" style={{color: 'black'}}>
                                        <h6 className="card-title">REAL EXPERTS FOR YOUR FINANCE.<br/>GUARANTEED DONE RIGHT.</h6>
                                        <p className="card-text"><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen
book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small></p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                </div>
                </div>
               
                </div>
            </div>
        </div>
    </div>
}

export default services;