import React from 'react'

const About = () => {
    return (
        <div className="container my-10">
            <h1 className="text-indigo-900 font-bold md:text-5xl text-3xl md:w-8/12 mx-auto">We started with only one goal: Make our clients smile</h1>
            <p className="text-gray-900 font-bold text-lg md:w-7/12 mx-auto">"Let's make a beautiful smile in your face"- is the only benefit
                of Our team. Support us to continue our steps</p>
            <div className="flex justify-around items-center w-8/12 md:flex-row flex-col mx-auto mt-10">
                <img src="https://assets.website-files.com/601d7e7320ecf079f58169fd/6021d3efd83afd31d029bb5a_image-1-story-dentist-template.jpg" alt="" className="md:w-5/12 rounded-xl"/>
                <img src="https://assets.website-files.com/601d7e7320ecf079f58169fd/6021d3ef96ce890df67f363b_image-2-story-dentist-template.jpg" alt="" className = 'md:w-5/12 md:mt-0 mt-3 rounded-xl'/>
            </div>
        </div>
    )
}

export default About
