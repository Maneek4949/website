import React from 'react';
import  img1 from '../assets/images/b1.png'
import  img2 from '../assets/images/b2.png'
import  img3 from '../assets/images/b3.png'
import  img4 from '../assets/images/b4.png'

const blogData = [
    {
      title: "Speaking SQL: Turning Natural Language into Database Dialogues",
      description:
        "In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
      redirectLink:
        "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html",
      photo:img1
    },
    {
      title: "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
      description:
        "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
      redirectLink:
        "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html",
        photo:img2
    },
    {
      title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      description:
        "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
      redirectLink:
        "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
        photo:img3
    },
    {
      title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
      description:
        "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
      redirectLink:
        "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html",
        photo:img4
    },
  ];
  

const Blog = () => {
    return (
        <>
            <div className="my-4 py-4 px-10" id='blog'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>
                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">        
                {blogData.map((blog,index)=>(                
<div key={index}  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl transition-all ease-in-out duration-400 hover:scale-105 flex flex-col ">
    <a href="#">
        <img className="rounded-t-lg" src={blog.photo} alt="" />
    </a>
    <div className="p-5 flex flex-col flex-grow">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-900 ">{blog.title}</h5>
        </a>
        <p className="mb-3 text-sm text-gray-700 flex-grow">{blog.description}</p>
        <a href={blog.redirectLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-auto" target="_blank">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

                ))}
                </div>
            </div>
            </div>

            




            
        </>
    )
}

export default Blog;