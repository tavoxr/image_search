import React from 'react';
import Search from './components/Search';
import ImagesContainer from './components/ImagesContainer';
import Load from './components/general/Load';
import Error from './components/general/Error';



class App extends React.Component {

  state={
      termino:'',
      imagenes:[],
      loading:false,
      error:null
  }

  consultarApi= async()=>{

      const termino =this.state.termino;
      
      this.setState({
        loading:true,
        error:null
      })

      if(termino){




      try{

        const url = `https://pixabay.com/api/?key=14906587-973d8c93741cbcc837d6738da&q=${termino}&per_page=20&lang=es&en`;
        // console.log(url);
  
        const respuesta = await  fetch(url);
        const data= await respuesta.json();
        this.setState({
          imagenes: data.hits,
          error:null,
          loading:false
  
  
        })
        
    

        



      }catch(error){

        // console.log(error.message);
        this.setState({
          loading:false,
          error:`Sorry we don't have images about ${termino}.`
        })
    
      }

    }else{
        this.setState({
          error:'Please enter something to search.',
          loading:false
        })
      
    }

   

  }


  datosBusqueda=(termino)=>{
    // console.log(termino);
    this.setState({
      termino
    },()=>{
      this.consultarApi();
    })
  }



  showInfo=()=>{

    if(this.state.loading){
      return <Load/>
    }

    if(this.state.error){

      return <Error
        error={this.state.error}
      
      />
    }
    if(this.state.termino && this.state.imagenes.length===0){
      return  <h3>Sorry we don't have images about {this.state.termino}</h3>
      
      
   }

    return  <ImagesContainer
                imagenes={this.state.imagenes}
 
           />
  }


render(){
  return (
    <div className="app container">
      <div className='jumbotron' id='title'>
        <p className='lead text-center'>Image Search</p>
        <Search
            datosBusqueda={this.datosBusqueda}
        
        />
      </div>
      <div className='row justify-content-center'>
       {this.showInfo()}
      </div>
    
    </div>
  );
}
}

export default App;
