import React from 'react'

function Contact() {
  return (
    <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 ">
    <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

    <form>

        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Let’s connect</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <div>
                        <input 
                            name="full_name" 
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" 
                            placeholder="Full Name*" />
                    </div>
                    

                    <div>
                        <input 
                            name="email"
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" 
                            placeholder="Email*"  
                        />

                    </div>

                    <div>
                        <input
                            name="phone_number" 
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" 
                            placeholder="Phone*"
                        />
                    </div>
                    <div>
                        <input 
                            name="subject" 
                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" 
                            placeholder="Subject*"
/>
                    </div>
            </div>
            <div className="my-4">
                <textarea 
                    name="message" 
                    placeholder="Message*" 
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="my-2 w-1/2 lg:w-2/4">
                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                        focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </div>
    </div>
    </form>
            <div
                className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
                <div className="flex flex-col text-white">
                    
                    <div className="flex my-4 w-2/3 lg:w-3/4">
                        <div className="flex flex-col">
                            <i className="fas fa-map-marker-alt pt-2 pr-2" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl">Office Address</h2>
                            <p className="text-gray-400">Bengaluru, Karnataka,India</p>
                        </div>
                    </div>
        
        <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
            <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>

            <div className="flex flex-col">
            <h2 className="text-2xl">Call Us</h2>
            <p className="text-gray-400">Tel: 0805550406</p>
            
                <div className='mt-5'>
                    <h2 className="text-2xl">Send an E-mail</h2>
                    <p className="text-gray-400">contact@bluetickconsultants.com</p>
                </div>
           
            </div>
        </div>
        
        <ul className="flex my-4  justify-around w-100">
               <a href="https://www.facebook.com/bluetickconsultants/" title="Facebook" target="_blank" rel="noopener"><i className="p-3 fa fa-facebook  flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
               <a href="https://www.instagram.com/bluetickconsultants/" title="Instagram" target="_blank" rel="noopener"><i className="p-3 fa fa-instagram   flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
               <a href="https://twitter.com/BluetickConsult" title="Twitter" target="_blank" rel="noopener"><i className="p-3 fa fa-twitter   flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
               <a href="https://www.linkedin.com/company/bluetick-consultants" title="Linkedin" target="_blank" rel="noopener"><i className="p-3 fa fa-linkedin   flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
               <a href="https://www.quora.com/profile/Bluetick-Consultants" title="Quora" target="_blank" rel="noopener"><i className="p-3 fa fa-quora   flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
                                </ul>
        </div>
    </div>
    </div>
</div>
  )
}

export default Contact;