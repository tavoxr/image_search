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
      error:null,
      pagina:''
  }

  paginaAnterior=()=>{
  //leer el state de la pagina actual
  let pagina= this.state.pagina;
  //leer si la pagina es 1, no ir hacia atras

  if(pagina===1)return null;
  //sumar una pag a la pagina actual
  pagina-=1;
  //agregar el cambio al state
  this.setState({
    pagina,
    loading:false,
     error:null
    
  },()=>{this.consultarApi()});

  // console.log(pagina);
  }

  paginaSiguiente=()=>{
    //leer el state de la pagina actual
    let pagina= this.state.pagina;
    //sumar una pag a la pagina actual
    pagina+=1;
    //agregar el cambio al state
    this.setState({
      pagina,
      loading:false,
       error:null
      
    },()=>{this.consultarApi()});

    // console.log(pagina);
  }







  consultarApi= async()=>{

      const termino =this.state.termino;

      const pagina=this.state.pagina;
      
      this.setState({
        loading:true,
        error:null
      })

      if(termino){




      try{

        const url = `https://pixabay.com/api/?key=14906587-973d8c93741cbcc837d6738da&q=${termino}&per_page=20&lang=es&en&page=${pagina}`;
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
      termino:termino,
      pagina:1
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
                paginaAnterior={this.paginaAnterior}
                paginaSiguiente={this.paginaSiguiente}
 
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
