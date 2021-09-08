import React from 'react';

const Image =(props)=>{

    const {
        largeImageURL,
        previewURL,
        likes,
        tags,
        views
    
    
        }=props.imagen;

    return(
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 mb-4' id='cardImageContainer'>
            <div className='card' id='cardImage'>
                 <img src={previewURL} alt={tags} className='card-img-top'  />
                 <div className='card-body' id='cardText'>
                     <p className='card-text'>
                            {likes} Likes
                     </p>
                     <p className='card-text'>
                         {views} Views
                     </p>
                     <a href={largeImageURL} target='_blank' rel="noopener noreferrer" className='btn btn-primary
                        btn-block'>
                            View Image
                     </a>

                 </div>
            </div>
        </div>
        
    )







}


export default Image;