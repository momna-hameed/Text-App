import React ,{useState} from 'react' 
export default function TextForm(props) 
{
    const handleUpClick=()=>
    {
    // console.log("uppercase is clicked" + {text} ) ;
     let newText=text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to Uppercase" , "success");
    }
  
    const handleLoClick=()=>
    {
    // console.log("lowercase is clicked" + {text} ) ;
     let newText=text.toLowerCase();
     setText(newText)  
     props.showAlert("Converted to Lowercase" , "success");
    }
    const handleClearClick=()=>
    {
    // console.log("lowercase is clicked" + {text} ) ;
     let newText=(" ");
     setText(newText)
     props.showAlert("Screen cleared" , "success");
    }
    const handleReplace=()=>
    {
    // console.log("lowercase is clicked" + {text} ) ;
     let newText1= prompt("enter text you want to replace");
     let newText2=prompt("enter new text you want to replace with")
     let newText= text.replaceAll( newText1,newText2);
  
     setText(newText)
     props.showAlert("Replaced all occurances" , "success");
    }
    const handleCopy=()=>
    {
    // console.log("lowercase is clicked" + {text} ) ;
     let newText = document.getElementById("mb1");
     newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied " , "success");
    }

    const handleRemove=()=>
    {
let newText=text.split(/[ ]+/);
setText(newText.join(" "))
props.showAlert("Removed extra spaces" , "success");
    }
    const handleOnChange=(event)=>
    {
     console.log("onchange")
     setText(event.target.value)
    }
    const [text,setText]=useState('');
    //text STATE variable conatain enter text value fun is setText to update

  return (
    <>

  <div className="conatiner" style={{color:props.mode==='light'? 'black' : 'white'} } >
  <h2 >{props.heading} </h2>
  

  <div className="mb-3">
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="mb1" rows="8"style={{backgroundColor:props.mode==='light' ? 'white' : 'grey' ||'red', color:props.mode==='light'? 'black' : 'white' }} ></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-2" onClick={handleReplace}>Replace</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy-Text</button>
  <button className="btn btn-primary mx-2" onClick={handleRemove}>Remove-Extra-Spaces</button>
  </div>

  <div className="conatiner my-3" style={{color:props.mode==='light'? 'black' : 'white'}} >
    <p>{text.split(" ").length-1} <b>Words</b>, {text.length} <b>Characters</b></p>
    <h3>Reading Time </h3>
    <p>{0.008*text.split(" ").length} Minute time</p>
    <h3>Preview your Text </h3>
    <p>{text.length>0 ? text : 'Write something in the box to preview'}</p>
    </div>

 
 
   </>
  )
}
//situation of component content as avariable after performing actions updated  the state
//hook:help you in using features of class without making class just import hook usestate from react
//useState return settext