import React from 'react';


class Search extends React.Component{
    render(){
        return(
            <form>
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input type='text' 
                                className='form-control form-control-lg' 
                                placeholder='Search your image. Example: Coffee'
                        />
                        
                    </div>

                </div>
            </form>
        );
    }

}


export default Search;