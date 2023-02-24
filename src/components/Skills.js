import React from 'react';
import { v4 as uuid } from 'uuid';
import SkillCard from './SkillCard.js'

import blob from '../assets/images/magicpattern-blob-1677058936207.svg';
import HTMLlogo from '../assets/images/html.png';
import CSSlogo from '../assets/images/logo-css-3-1536.png';
import JSlogo from '../assets/images/javascript-logo-transparent-logo-javascript-images-3.png';
import Reactlogo from '../assets/images/React-icon.svg.png';


const Skills = () => {

    const mainSkills = [
        {
            id:uuid(),
            num: 1, 
            name:'HTML', 
            icon: HTMLlogo, 
            rating: 'intermediate' 
        }, 
        {
            id:uuid(),
            num: 2, 
            name:'CSS', 
            icon: CSSlogo, 
            rating: 'intermediate' 
        }, 
        {
            id:uuid(),
            num: 3, 
            name:'JavaScript', 
            icon: JSlogo, 
            rating: 'intermediate' 
        }, 
        {
            id:uuid(),
            num: 4, 
            name:'React', 
            icon: Reactlogo, 
            rating: 'beginner' 
        }, 
    ];

    const otherSkills = ['JSON', 'VS Code', 'Git & GitHub', 'DOM', 'regular expressions', 'APIs', 'Node.js & npm']

    const renderMainSkills = mainSkills.map(mainSkill => {
        return (
                <SkillCard mainSkill={mainSkill}/>
        )
    }) 

    const renderOtherSkills = otherSkills.map(otherSkill => {
        return (
           <SkillCard otherSkill={otherSkill}/>
        )
    }) 

    return(
        <section id='skills'>
            <h5>SEE WHAT I CAN DO</h5>
            <h1>SKILLS</h1>
            <div className='container'>
                <h4 className='main__heading'>MAIN EXPERIENCE</h4>
                <div className='main__skills'>
                    {renderMainSkills}
                </div>
                <h4>OTHER EXPERIENCE I ENCOUNTERED IN MY PROJECTS</h4>
                <div className='other__skills'>
                    {renderOtherSkills}
                </div>
            </div>         
            <img className='blob2' src={blob} alt='blob'></img>
        </section>
    )
}

export default Skills;





//codecademy courses
//school

//command line
//BEM naming convection
//node.js libraries
//git & github
//DOM manipulation and selectors
//regex
//apis
//html
//css
//javascript
//react
//JSON


//skill card
    //name
    //description
    //filter projects that use that skill
    //seniority - 3 stars - beginner, intermediate, advanced