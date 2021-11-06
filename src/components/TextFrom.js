import React,{useState} from 'react'

export default function TextFrom(props) {

    
    const handleClick=()=>{
        
        let newText=text.toUpperCase();
        setText(newText);
       props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        //newText=text.replace(/\s+/g,'').trim();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space removed","success");
    }
    // const handleCopy=()=>{
    //     var text =document.getElementById("myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    //     document.getSelection().removeAllRanges();
    //     props.showAlert("Copied to ClipBoard!","success")
    // }
    const [text,setText]=useState('');
    return (
        <>
        <div className="container my-3" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
            <h2 className='my-2'>{props.heading}</h2>
           <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? '#13466e' : 'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="6"></textarea>
             </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
           {/* <button disabled={text.length===0} className="btn btn-primary mx-1 " onClick={handleCopy}>Copy Text</button>disabled={text.length===0}  */}
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
           
         </div>
        <div className="container my-3"  style={{color:props.mode==='dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and , {text.length} charecters</p>
            <p>{0.08*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
         </>
    )
}
