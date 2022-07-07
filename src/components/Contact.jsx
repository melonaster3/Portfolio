import React from "react";

const Contact = () => {
  return (
    <div name = 'contact' className='w-full h-screen text-#576F72 bg-[#E4DCCF] flex justify-center items-center p-4'>
        <form method = 'POST' action ="https://getform.io/f/28111fed-8adf-4344-a90b-d3ed1f7fb690" className = 'flex flex-col max-w-[600px] w-full' >
            <div className = 'pb-2'>
                <p className = 'text-4xl font-bold inline border-b-4 border-[#576F72] text-#576F72'>Contact</p>
                <p className = "text-#576F72 py-4">Submit the form below or shoot me an email : <b>sangyoon.lee@ucalgary.ca</b></p>
           </div>
           <input className='bg-[#F0EBE3] p-2' type="text" placeholder='Name' name='name' />
            <input className= 'my-4 p-2 bg-[#F0EBE3]' type="text" placeholder = 'Email' name ='email' />
            <textarea className = 'bg-[#F0EBE3] p-2' name = 'message' placeholder= 'Message' rows = '10' />
            <button className = "text-black border-2 border-[#576F72] rounded  hover:bg-[#576F72] hover:text-[#F0EBE3] px-4 py-3 my-8 mx-auto flex items-center b">Contact me!</button>
        </form>
   </div>
  );
};

export default Contact;
