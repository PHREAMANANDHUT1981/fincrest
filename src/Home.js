import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeImg from './Images/Man1.JPG'
import backgrdImg from './Images/Artboard – 4.png'
import './Home.css'
function Home(){
    return <div style={{ backgroundColor: 'black', color: 'white', backgroundImage: `url("${backgrdImg}")` }}>
        <div className='container'>



            <div className='row justify-content-center' style={{ backgroundColor: 'black', color: 'white', backgroundImage: `url("${backgrdImg}")` }}>
                <div className='col-md-6'>
                    <br /> <br /> <br /> <br />
                    <h1>
                        Real Expert <br /> For your Finance
                </h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry’s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.</p>

                </div>
                <div className='col-md-6' style={{paddingTop:84,paddingBottom:84}}>
                    <img src={HomeImg} alt="Home" className="d-inline-block align-text-top"></img>
                </div>
            </div>
        </div>
    </div>
}

export default Home;