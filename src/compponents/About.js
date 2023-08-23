

//Functionality likhi ha ek light mode ki color white r bg black ek variable me kr k jis ka name= let style
//ek use state bnai ha jis me mystyle variable lia ha phir us me light mode ki properties set krdi hain
// ek btn bnaya ha toggle fun likha ah us me if else ki condition ha k if variable color = black turn it into light mode
//by updating setmystyle
// same with btn state






//
export default function About(props) {

  return (

    <div className='container ' style={{backgroundColor:props.mode==='light' ? 'white' : 'grey', color:props.mode==='light' ? 'black': 'white'}}>
      <h1 className='my-3'>About Us</h1>

      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={{backgroundColor:props.mode==='light' ? 'white' : 'grey', color:props.mode==='light' ? 'black': 'white'}} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={{backgroundColor:props.mode==='light' ? 'white' : 'grey', color:props.mode==='light' ? 'black': 'white'}} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='light' ? 'white' : 'grey', color:props.mode==='light' ? 'black': 'white'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={{backgroundColor:props.mode==='light' ? 'white' : 'grey', color:props.mode==='light' ? 'black': 'white'}} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>



  </div>


</div>

  )
}
