import React from "react";

const Contact = () => {
  return (
    <div name = 'contact' className='w-full h-screen text-[#F0EBE3] bg-[black] flex justify-center items-center p-4'>
        <form method = 'POST' action ="https://getform.io/f/28111fed-8adf-4344-a90b-d3ed1f7fb690" className = 'flex flex-col max-w-[600px] w-full' >
            <div className = 'pb-2'>
                <p className = 'text-4xl font-bold inline border-b-4 border-[#76BB85] text-#576F72' data-aos="fade-down">Contact</p>
                <p className = "text-#576F72 py-4" data-aos="fade-in">Submit the form below or shoot me an email : <b>sangyoon.lee@ucalgary.ca</b></p>
           </div>
           <input className='bg-[gray-300] p-2 text-black' type="text" placeholder='Name' name='name' />
            <input className= 'my-4 p-2 bg-[gray-300] text-black' type="text" placeholder = 'Email' name ='email' />
            <textarea className = 'bg-[gray-300] p-2 text-[black]' name = 'message' placeholder= 'Message' rows = '10' />
            <button className = "text-[#76BB85] border-2 border-[#76BB85] rounded  hover:bg-[#76BB85] hover:text-[black] px-4 py-3 my-8 mx-auto flex items-center b" data-aos="fade-in">Contact me!</button>
        </form>
   </div>
  );
};

export default Contact;
