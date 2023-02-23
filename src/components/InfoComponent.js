import React from "react";
import project1img from '../assets/images/card-validation.png';
import project2img from '../assets/images/pricing-component.png';
import { v4 as uuid } from 'uuid';

const InfoComponent = () => {
    const data = [
        { 
          id: uuid(),
          number: 1,
          image: project1img,
          name: 'first Project name', 
          description: "first project description first project description first project description first project description first project description",
          github: "https://github.com/zuzanapiarova",
          site: "https://www.frontendmentor.io/profile/zuzanapiarova"
        }, 
        { 
          id: uuid(),
          number: 2,
          image: project2img,
          name: "second Project name", 
          description: "second project description first project description first project description first project description first project description",
          github: "https://github.com/zuzanapiarova",
          site: "https://www.frontendmentor.io/profile/zuzanapiarova"
        }
      ]

    return(
        <div data={data}></div>
    )
}

export default InfoComponent;