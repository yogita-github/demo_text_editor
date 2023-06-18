import React,{ useState } from 'react'


export default function TextEditor(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick = () =>{
      let newText = "";
      setText(newText)
      props.showAlert("Converted to empty box!","success");
  }
  const generateReversedText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText)
    props.showAlert("Converted to reverse string!","success");
  }
  
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied the text!","success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces!","success");
  }

    const handleOnChange = (event)=>{
        // console.log("Handle Onchange");
        setText(event.target.value)
    }
    const [text,setText] = useState(" ");
//     text = "new text";--//wrong way to change the text.
// setText = ("new text");--correct way to set the text.

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
  <div className="container" >
<div className="mb-3">
  <label htmlFor="box2" className="form-label">Description</label>
  <textarea className="form-control" id="box2" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className="btn btn-primary mx-4 my-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-4 my-1" onClick={handleLowClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-4 my-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-4 my-1" onClick={generateReversedText}>Reverse text</button>
<button className="btn btn-primary mx-4 my-1" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-4 my-1" onClick={handleExtraSpaces}>Removes Extra Space</button>

{/* <button className="btn btn-primary mx-4" onClick={bold}>Bold Text</button> */}





</div>
</div> 
<div className="container my-2">
    <h1>Your text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words  and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
