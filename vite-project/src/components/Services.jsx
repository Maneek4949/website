import React from 'react';
import img1 from '../assets/images/1.svg';
import img2 from '../assets/images/2.svg';
import img3 from '../assets/images/3.svg';
import img4 from '../assets/images/4.svg';


const serviceData = [{'heading':'We are deeply committed to the growth and success of our clients.',
'content':"Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.",
"img":img1},
{
    'heading':'Design AI Trust Layer','content':"Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.",
    "img":img2
},
{
    'heading':'Scalability-Focused Solutions','content':"Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.",
    "img":img3
},
{
    'heading':'End to end Workflow automation','content':"Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.",
    "img":img4
}]

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">What we offer</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {serviceData.map((service,index)=>(
                                <div key={index} className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group relative">
                                <div className="m-2 text-justify text-sm flex flex-col h-full">
                                  <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={service.img} />
                                  <h2 className="font-semibold my-4 text-2xl text-center flex-1">{service.heading}</h2>
                                  <p className="text-md font-medium pb-6">{service.content}</p>
                                </div>
                              </div>
                            ))}

                        
            
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Services;