import React from "react";
import { BsGithub, BsLink45Deg } from 'react-icons/bs';

const ProjectCard = (props) => {

    const {id, image, name, description, skills, github, site } = props.project;

    const renderGithubIcon = () => {
        if(github === ''){
            return
        } else {
            return <a href={github} target='_blank' rel="noreferrer"><i>{<BsGithub />}</i></a>
        }  
    }

    const renderSiteIcon = () => {
        if(site === ''){
            return
        } else {
            return <a href={site} target='_blank' rel="noreferrer"><i>{<BsLink45Deg />}</i></a>
        }  
    }

    return(
        <div className='project__card'>
            <div className='head__img--wrapper'>
                <img className='head__img' src={image} alt='project site preview'></img>
            </div>
                <div className='project__info'> 
                    <div className='info--wrapper'>
                        <h3>{name}</h3>
                        <h5>{skills}</h5>
                        <p>{description}</p>
                    </div>
                    <div className='project__links--wrapper'>
                            {renderGithubIcon()}
                            {renderSiteIcon()}
                    </div>               
                </div>    
            </div>
    )
}

export default ProjectCard;