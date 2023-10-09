import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");
    //to update value
    //wrong way
    //text="Hello"
    //correct way is
    //setText("Enter here");


    const handelUp=(event)=>{
        // console.log("Up clicked    ");
        const a=text.toUpperCase();
        setText(a)
    }

    const handleOnChange=(event)=>{
        // console.log("Changed")
        setText(event.target.value)
    }
    const wordCount=(value)=>{
        return value.split(/\s+/).filter(str => { return str !== '' })
        .length;
    }

    const colrhndl=()=>{
        if(props.color==="#000000"){
            console.log(props.color)
            return {backgroundColor:'white',color:'black'}
        }
        else{
            return {backgroundColor:props.color,color:'black'}
        }
    }

    const handelLower=()=>{
        const a=text.toLowerCase();
        props.alert("success","Converted to lower case")
        setText(a);
    }

    const handelClear=()=>{
        const a='';
        setText(a);
    }

    const handelInverse=()=>{
        let a="";
        for(let i=0;i<text.length;i++){
            if(text.charAt(i)===text.charAt(i).toUpperCase()){
                a+=text.charAt(i).toLowerCase();
            }
            else if(text.charAt(i)===text.charAt(i).toLowerCase()){
                a+=text.charAt(i).toUpperCase();
            }
            else{
                a+=text.charAt(i);
            }
        }
        setText(a)
    }
  return (
    <>
<div className="mb-3">
    <h1 className='mb-3'>{props.name}</h1>
  <textarea className="form-control mb-3" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
  <button disabled={text.length===0} className='btn btn-primary  my-1 mx-1'style={colrhndl()} onClick={handelUp}>Uppercase Conversion</button>
  <button disabled={text.length===0}className='btn btn-primary  my-1 mx-1' style={colrhndl()}onClick={handelLower}>Lowercase Conversion</button>
  <button disabled={text.length===0}className='btn btn-primary  my-1 mx-1'style={colrhndl()} onClick={handelClear}>Clear Text</button>
  <button disabled={text.length===0}className='btn btn-primary  my-1 mx-1'style={colrhndl()} onClick={handelInverse}>Inverse Text</button>
</div>
<div className='container'>
    <h1>Your text Summary</h1>
    <p> {text.trim().length} characters {wordCount(text)}words</p>
</div>
    </>
  )
}
