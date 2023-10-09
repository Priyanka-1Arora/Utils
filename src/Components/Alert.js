import React from 'react'

export default function Alert(props) {
  if(props.alert==='null'){
    return (<div style={{height:'50px'}}></div>);
  }
    const capitalize=()=>{
        let str=`${props.alert.type}`.toLowerCase()
        return str.charAt(0).toUpperCase()+str.slice(1)
    }
  return (
    <div style={{height:'50px'}}>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize()}</strong>: {props.alert.message}
</div></div>
  )
}
