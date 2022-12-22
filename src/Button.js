import React from 'react';
import './Button.css';
import CreateFolder from './CreateFolder';

function Button(){
    return(
        <>
        <div className='new'>
        <p className='para'>Root</p>
    <button className='para' id='btn'><i class="fa fa-file" aria-hidden="true"></i>&nbsp;
    Upload File</button>
    <button className='para' id='btn'><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;
    Create File</button>
    {/* <button className='para' id='btn'><i class="fa fa-folder" aria-hidden="true"></i>&nbsp;
    Create Folder</button> */}
    <CreateFolder className="folder"/>
</div>
</>
    )
}
export default Button;