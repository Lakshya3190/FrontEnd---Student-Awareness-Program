import './intro.css';
import React from 'react';
import 'tachyons';
import { Link, animateScroll as scroll } from "react-scroll";




function Intro()
{
    
    return(
        <div className='Intro' data-bg="oddbird">
            
            <div className= 'section-left'>
            <div className = 'content content-left b tc'>
                <p>Weakness?</p>
            </div>
            </div>


            <div className='section-right'>
            <div className = 'content content-right b tc'>
                <p>Strength?</p>
            </div>
            </div>

            <div className='section-center grow'>
                <div className = 'content center-content b tc'>
                    <p>Tolerance and Compassion</p>
                </div>
            </div>

            <div className='section-low grow'>
                <div className = 'content content-low b tc'>
                <Link activeClass= 'active' to = 'page1' smooth = {true} duration = {600}>
                    <p>Find Out</p>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Intro;