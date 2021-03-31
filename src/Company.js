import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import offImg from './Images/Cardbiulding.JPG';
import SysImg from './Images/Sysbuild.JPG'
import backgrdImg from './Images/Artboard – 4.png';
import cardImg4 from './Images/Artboard – 18.png';
import cardImg3 from './Images/Artboard – 19.png';
import cardImg2 from './Images/Artboard – 20.png';
import cardImg1 from './Images/Artboard – 21.png';

function Company(){
    return <div style={{ backgroundColor: 'black', color: 'black', backgroundImage: `url("${backgrdImg}")` }}>
        <div className='container'>
            <div className='row justify-content-center' style={{ backgroundColor: 'black', color: 'white', backgroundImage: `url("${backgrdImg}")`, paddingTop: 50, paddingBottom: 50 }}>
                <div className='col-md-6'>
                    <h1>
                        Real Expert <br /> For your Finance
                </h1>
                </div>
                <div className='col-md-6'>
                    <p> Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className="card text-dark bg-light mb-3" style={{ padding: 5 }}>
                        <img src={offImg} class="card-img-top" alt="office"></img>
                        <div className="card-body">
                            <h5 className="card-title">FACE TO FACE TAX RETURN SERVICES</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.  </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="card text-dark bg-light mb-3" style={{ padding: 5 }}>
                        <img src={SysImg} class="card-img-top" alt="office"></img>
                        <div className="card-body">
                            <h5 className="card-title">VIRTUAL TAX RETURN SERVICES</h5>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.  </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Company;