import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import backgrdImg from './Images/Artboard – 4.png';
import quote from './Images/Artboard – 13.png';

function clients(){
    return<div style={{ backgroundColor: 'black', color: 'white', backgroundImage: `url("${backgrdImg}")` }}>
        <div className='container'>
            <div className='row justify-content-center' style={{ paddingTop: 153, paddingBottom: 153}}>
                <div className='col-md-4'>
                <div class="card w-100">
                      <div class="card-body" style={{color: 'black'}}>
                         <h5 class="card-title"></h5>
                           <p class="card-text"><small>Lorem Ipsum is simply dummy text
                                                  of the printing and typesetting
                                                     industry. Lorem Ipsum has been the
                                                      industry’s standard dummy text ever
                                                       since the 1500s, when an unknown
                                                       printer took a galley of type.</small></p>
                             <br/>
                             <span>
                                 <strong>John Kenneth</strong><br/>
                                 <small>Sydney, Australia</small>
                             </span>
                       </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div class="card w-100">
                      <div class="card-body" style={{color: 'black'}}>
                         <h5 class="card-title"></h5>
                           <p class="card-text"><small>Lorem Ipsum is simply dummy text
                                                  of the printing and typesetting
                                                     industry. Lorem Ipsum has been the
                                                      industry’s standard dummy text ever
                                                       since the 1500s, when an unknown
                                                       printer took a galley of type.</small></p>
                             <br/>
                             <span>
                                 <strong>Marvin Hugh</strong><br/>
                                 <small>Sydney, Australia</small>
                             </span>
                       </div>
                </div>
                </div>
                <div className='col-md-4'>
                <div class="card w-100">
                      <div class="card-body" style={{color: 'black'}}>
                         <h5 class="card-title"></h5>
                           <p class="card-text"><small>Lorem Ipsum is simply dummy text
                                                  of the printing and typesetting
                                                     industry. Lorem Ipsum has been the
                                                      industry’s standard dummy text ever
                                                       since the 1500s, when an unknown
                                                       printer took a galley of type.</small></p>
                             <br/>
                             <span>
                                 <strong>Clifford Jacob</strong><br/>
                                 <small>Sydney, Australia</small>
                             </span>
                       </div>
                </div>
                </div>
            </div>
        </div>
    </div>
}

export default clients;