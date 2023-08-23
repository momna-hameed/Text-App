import React from 'react'


function Alert(props) {
    const capitalize=(word)=>
    {
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
      <strong> {capitalize(props.alert.type)} :{props.alert.msg}</strong> 
      
    </div>
  )
}
//&& props.alert evaluate if false next is not checked but if true next is evaluated
//if props. alert is null to false
// if props.alert not null than div wiill be returned
export default Alert
