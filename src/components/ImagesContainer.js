import React from 'react';
import Image from './Image';
import NextPage from './NextPage';

class ImagesContainer  extends React.Component{

       mostrarImagenes=()=>{
           const {imagenes}=this.props;

           if(imagenes.length===0) return null;
           console.log(imagenes);

           return(
               <div className='imageContainer'>
                   <div className='col-12  row' id='imageMap'>
                       {imagenes.map(imagen=>(
                           <Image
                                key={imagen.id}
                                imagen={imagen}
                           />
                       ))} 
                   </div>
                   <div className='row justify-content-center'>
                    <NextPage
                        paginaAnterior={this.props.paginaAnterior}
                        paginaSiguiente={this.props.paginaSiguiente}
                    
                    />
                   </div>
                  
               </div>
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