import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const SkillCard = (props) => {

    const getRating = () => {
        if(props.mainSkill.rating === 'beginner'){
            return (
                <div className='rating'>
                    <AiFillStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
            )
        } else if(props.mainSkill.rating === 'intermediate'){
            return (
                <div className='rating'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                )
        } else if(props.mainSkill.rating === 'advanced'){
            return (
                <div className='rating'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                )
        }                   
    }

    const populateSkills = () => {
        if(props.mainSkill){
            const {name, icon, rating } = props.mainSkill
            return (
                <div className='skill__card'>
                    <img className='skill__icon' src={icon} alt='logos of popular frontend frameworks'></img>
                    <div>
                        <h3>{name}</h3>
                        <p>{rating}</p>
                        {getRating()}
                    </div>                 
                </div>
                )
        }else if(props.otherSkill){
            const name = props.otherSkill;
            return(
                <div>{name}</div>
            )
        }
    }

    return (
        <div>
            {populateSkills()}
        </div>
    )
}

export default SkillCard;