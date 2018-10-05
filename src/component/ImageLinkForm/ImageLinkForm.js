import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =({onInputChange, onButtonSubmit})=>{
	return(
		<div>
		<div className= 'center'>
		    <p className= 'center f3'>{'This magic brain will detect the face in the image'}</p>
			</div>
			<div className= 'center' >
			<div className=' form  pa3 br3 center shadow-5 '>
			   <input className='f4 pa2 grow  w-70 center' type='tex' onChange={onInputChange} />
			   <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
			   onClick={onButtonSubmit} >
		        Detect </button>
			</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
