import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper Case was Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!" , "success")
    }
    

    const handleLoClick = () =>{
      // console.log("Lower Case was Clicked" + text)
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase!", "success")
  }

  const handleClearClick = () =>{
    // console.log("Clear text" + text)
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success")
  }

  // const handleinverseClick = () => {
  //  // console.log("inverse click is triggered");
  //   let newtext = "";
  //   for (let i = text.length - 1; i >= 0; i--) {
  //     newtext += text[i];
  //   }
  //   setText(newtext);
  // }

  const titleCase = () =>{
    let newText = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Title Case!", "success")
  }

  const copy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")
}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces Removed!", "success")
} 

  // const reversed = () => {
  //   let splitWord = text.split("");

  //   let reverseWord = splitWord.reverse("");
  //   let joinedWords = reverseWord.join("");
  //   let newText = joinedWords

  //   setText(newText);
  // };

    const handleOnChange =(event) =>{
        // console.log("On Change")
        setText(event.target.value);
    }

  const [text, setText] = useState("");
//   setText("new text");
 
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#0f1a24'}}>
    <h1> {props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#0f1a24'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}> LowerCase</button>
    {/* <button className="btn btn-primary mx-2" onClick={handleinverseClick}>Inverse text</button> */}
    <button className="btn btn-primary mx-1" onClick={titleCase}>Title Case</button>
    <button className="btn btn-primary mx-1" onClick={copy}>Copy text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Whitespaces</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
    {/* <button className="btn btn-primary mx-2" onClick={reversed}>Reverse text</button> */}
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#0f1a24'}}>
      <h2> Your Text Summary </h2> 
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h3>Preview</h3>
      <p>{text.length?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
