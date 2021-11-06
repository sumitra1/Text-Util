//import React,{useState} from 'react'

export default function About(props) {

    
  // const [myStyle,setmyStyle]=useState(
  // {
  //     color:'black',
  //     backgroundColor:'white'
  // })
 
let myStyle={
  color:props.mode==='dark'?'white':'#042743',
  backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
  // border:'2px solid',
  // borderColor:props.mode==='dark'?'white':'#042743'

}

  return (
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1>About Us</h1>
          <div className="accordion" id="accordionExample" style={myStyle}>
<div className="accordion-item" style={myStyle}>
  <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze your text</strong>
    </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
     <p>TextUtils gives you a way to anlyze your text quickly ans efficently. Be it word count, character count or</p>
    </div>
  </div>
</div>
<div className="accordion-item " style={myStyle}>
  <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <strong>Free to Use</strong>
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
     <p>TextUtils is a free character counter tool that provides instant charcter count & word count statisctics for a given text. TextUtils reports the number of words / Character limit. 
     </p>
    </div>
  </div>
</div>
<div className="accordion-item" style={myStyle}>
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong>Browser Compatible</strong>
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook,blog, books, excel document, pdf document, essays, etc.  
    </div>
  </div>
</div>
</div>

      </div>
  )
}
