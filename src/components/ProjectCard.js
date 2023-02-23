import React from "react";
import { BsGithub, BsLink45Deg } from 'react-icons/bs';

const ProjectCard = (props) => {

    const {id, image, name, description, skills, github, site } = props.project;

    return(
        <div className='project__card'>
            <div className='head__img--wrapper'>
                <img className='head__img' src={image}></img>
            </div>
                <div className='project__info'> 
                    <div className='info--wrapper'>
                        <h3>{name}</h3>
                        <h5>{skills}</h5>
                        <p>{description}</p>
                    </div>
                    <div className='project__links--wrapper'>
                        <div>
                            <a href={github} target='_blank'><i>{<BsGithub />}</i></a>
                            <a href={site} target='_blank'><i>{<BsLink45Deg />}</i></a>
                        </div>
                        <button className='see-more__btn'>See more</button>  
                    </div>               
                </div>    
            </div>
    )
}

export default ProjectCard;