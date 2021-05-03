import React, {useState} from 'react';
import {AccordionData} from './AccordionData';
import {IconContext} from 'react-icons';
import {FiPlus, FiMinus} from 'react-icons/fi';
import './Accordion.css';

const Accordion = () => {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index){
            //if clicked title is already active, then close it.
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <IconContext.Provider value={{ color: '#00FFB9', size: '25px'}}>
            <div className="accor">
                <div className="leftcontent">
                    <img src="images/img-8.jpg" alt="accordion" className='accorimg'/>
                </div>
                <div className="rightcontent">
                    {AccordionData.map((item, index) => {
                            return (
                                <>
                                    <div className="wrap" onClick={() => toggle(index)} key={index}>                      
                                        <h6>{item.title}</h6>
                                        <span>{clicked === index ? <FiMinus /> : <FiPlus /> }</span>
                                    </div>  
                                    {clicked === index ? (
                                        <div className="drop"> 
                                            <p>{item.description}</p>
                                        </div>
                                    ) : null}
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Accordion
