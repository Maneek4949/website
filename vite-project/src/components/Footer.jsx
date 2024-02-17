import logo from '../assets/images/footerlogo.webp'
import glassDoor from '../assets/images/glassdoor-rating.webp'
import Iso from '../assets/images/bluetick-iso.webp'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
                    <div className="col-span-12  md:col-span-4 lg:col-span-4 ">
                        <div className="box-border border-b-4 border-blue-900 p-8 bg-blue-500 rounded-lg mx-auto flex  justify-evenly">
                                <img className='h-12' src={logo}/>
                                <img className='h-12' src={glassDoor}/>
                                <img  className='h-12'src={Iso}/>
                        </div>
                    </div>

                    <div className="col-span-6 md:col-span-4 lg:col-span-4 mx-auto">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">PRODUCTS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <a href="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Talk To Code</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">InterviewGPT</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Privacy Doc</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Sales Call Evaluator</a>
                        </li>
                        </ul>
                    </div>

                    <div className="col-span-6 md:col-span-4 lg:col-span-4 mx-auto w-full">
                        <h6 className="text-[#013289] text-xl font-bold mb-4">RESOURCES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <a href="#blog" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Blog</a>
                        </li>                           
                        </ul>

                        <h6 className="text-[#013289] text-xl font-bold mb-4">Social Media Links.</h6>
                        <div className="mx-auto text-center mt-2">
                        <ul className="flex justify-around mb-4 md:mb-0">
               <a href="https://www.facebook.com/bluetickconsultants/" title="Facebook" target="_blank" rel="noopener"><i className="p-3 fa fa-facebook  flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
               <a href="https://www.instagram.com/bluetickconsultants/" title="Instagram" target="_blank" rel="noopener"><i className="p-3 fa fa-instagram   flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
               <a href="https://twitter.com/BluetickConsult" title="Twitter" target="_blank" rel="noopener"><i className="p-3 fa fa-twitter   flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
               <a href="https://www.linkedin.com/company/bluetick-consultants" title="Linkedin" target="_blank" rel="noopener"><i className="p-3 fa fa-linkedin   flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
               <a href="https://www.quora.com/profile/Bluetick-Consultants" title="Quora" target="_blank" rel="noopener"><i className="p-3 fa fa-quora   flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-hidden="true"></i></a>
                                </ul>
                            </div>
                    </div>        

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    {new Date().getFullYear()}{"  "} &copy;  {" "} All rights reserved by
                    <a
                        href="#"
                        className=" hover:text-gray-900"
                    >
                      Bluetick Consultants LLP
                    </a>
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
