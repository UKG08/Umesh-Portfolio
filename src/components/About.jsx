import React from 'react';
import Service from './ServiceCard';

function About() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
     <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview</h2>
      <div className="mt-4 text-secondary text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif">
        I bring advanced expertise in web development and Android app development to the table. With a solid foundation in Python programming, I continuously strive to expand my skills and stay at the forefront of technological advancements. My passion for crafting seamless user experiences and solving complex problems drives me to deliver innovative solutions that exceed expectations. With a keen eye for detail and a collaborative spirit, I thrive in dynamic environments where I can contribute to impactful projects and drive meaningful change through technology.
      </div>
      <div className="mt-8">
        <Service />
      </div>
    </div>
  );
}

export default About;
