import React from 'react';
import Search from './components/Search';

class App extends React.Component {

  state={
      termino:''
  }

  datosBusqueda=(termino)=>{
    console.log(termino);
    this.setState({
      termino
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
      {this.state.termino}
    </div>
  );
}
}

export default App;
