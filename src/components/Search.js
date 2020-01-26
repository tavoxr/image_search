import React from 'react';


class Search extends React.Component{

    searchRef= React.createRef();

   


    obtenerDatos=(e)=>{
        e.preventDefault();

        //tomamos el valor del input
        const termino= this.searchRef.current.value;

        //lo enviamos al componente principal
        this.props.datosBusqueda(termino)
    }


    render(){
        return(
            <form onSubmit={this.obtenerDatos} >
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input type='text' 
                                ref={this.searchRef}
                                className='form-control form-control-lg' 
                                placeholder='Search your image. Example: Coffee'
                        />
                        
                    </div>

                    <div className='form-group col-md-4'>
                        <input type='submit' 
                                className='btn btn-lg btn-success btn-block' 
                                value='Search'
                        />
                        
                    </div>

                </div>
            </form>
        );
    }

}


export default Search;