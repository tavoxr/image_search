import React from 'react';
import Image from './Image';
import NextPage from './NextPage';

class ImagesContainer  extends React.Component{

       mostrarImagenes=()=>{
           const {imagenes}=this.props;

           if(imagenes.length===0) return null;
           console.log(imagenes);

           return(
               <React.Fragment>
                   <div className='col-12 p-5 row'>
                       {imagenes.map(imagen=>(
                           <Image
                                key={imagen.id}
                                imagen={imagen}
                           />
                       ))} 
                   </div>
                   <div className='row justify-content-center'>
                    <NextPage/>
                   </div>
                  
               </React.Fragment>
           )
       }
    render(){

        
        return(
            <div>
                {this.mostrarImagenes()};
            </div>


        );
    }

}

export default ImagesContainer;