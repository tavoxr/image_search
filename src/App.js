import React from 'react';
import Search from './components/Search';
import ImagesContainer from './components/ImagesContainer';
class App extends React.Component {

  state={
      termino:'',
      imagenes:[]
  }

  consultarApi= async()=>{

      const termino =this.state.termino;

      const url = `https://pixabay.com/api/?key=14906587-973d8c93741cbcc837d6738da&q=${termino}&per_page=20&lang=es&en`;
      console.log(url);

      const respuesta = await  fetch(url);
      const data= await respuesta.json();
      this.setState({
        imagenes: data.hits


      })
      
      console.log(data.hits);
  }


  datosBusqueda=(termino)=>{
    console.log(termino);
    this.setState({
      termino
    },()=>{
      this.consultarApi();
    })
  }


render(){
  return (
    <div className="app container">
      <div className='jumbotron'>
        <p className='lead text-center'>Image Search</p>
        <Search
            datosBusqueda={this.datosBusqueda}
        
        />
      </div>
      <div className='row justify-content-center'>
        <ImagesContainer
        imagenes={this.state.imagenes}
     
         />
      </div>
     
    </div>
  );
}
}

export default App;
