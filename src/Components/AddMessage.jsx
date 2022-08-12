import {useEffect,useState} from 'react'
function AddMessage (){
const handleSubmit=e=>{
    e.preventDefault()
    alert("form submitted")
}
const [message,setMessage]=useState(null)
const [form, setForm]=useState(null)
    

useEffect(() => {

      }, [form]);

      
      async function formSubmit(e) {
        e.preventDefault();
          
        console.log("form submitted");
    
        // const comment= {
        //   title:title,
        //   description:description,
        //   author:author
        // }
        
    
        ;
        try {
          const results = await fetch("http://localhost:4000/message", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          });
          console.log(results);
          const data = await results.json();
          console.log(data);
          // alert()
        } catch (error) {
          console.log(error);
        }
      }{console.log(form)}
      const updateForm = (event) =>{
        // setForm({[event.target.name]: event.target.value})
        setForm({...form,[event.target.name]: event.target.value})
       }


      return(
       
        <form onSubmit={formSubmit}>
     
  
          {/* here goes the title */}
          <label>Message here</label>
          <input
            name="message"
            //required
            type="text"
            value={form.message}
            onChange={updateForm}
          />
            <h2></h2>
             
        </form>
      )

    }

    export default AddMessage

    





    
    
