import React from 'react';
import './FaceRecognition.css'

const FaceRecognition =({imageUrl, box})=>{
	return(
		<div className = 'center ma'>
		<div className = ' center  absolte m2'>
         <img  id='inputimage' alt='img' src={imageUrl} width='500px' height='auto'/>
        <div className='bounding-box' style={{top: box.topRow,  left:box.leftCol, bottom:box.bottomRow, right: box.rightCol }}>
		</div>
		</div>
		</div>
	
	);
}

export default FaceRecognition;

