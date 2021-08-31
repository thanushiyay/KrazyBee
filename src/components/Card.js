import React from 'react';
import './Album.scss';

export default function Card({photoDet}) {
    return (
        <div className="card">
           <div className="imageBox">
               <img src={photoDet.url} alt="photoDet" style={{width:"160px",height:"160px",marginBottom:'5px'}}/>
           </div>
           <div className="title">{photoDet.title}</div>
           <div className="subTitle">{"id : " + photoDet.id}</div>
        </div>
    )
}
