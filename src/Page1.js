import './page1.css';
import React from 'react';
import 'tachyons';
import CountUp from 'react-countup';

function Page1()
{
    return(
        <div className='page1'>


             <div className = 'center box'>
                 <div className='content_center tc b grow content'>
                    
                    <p>Are you doing your part?</p>
                    <div className='content-overlay'></div>
                    <p className= 'content-details fadeIn-bottom'>
                    "Love, compassion, and tolerance are necessities, not luxuries. Without them, humanity cannot survive."<br/>
                    It is the utter lack of and indifference for the well-being and rights of the fellow man 
                    in India which is hampering our growth and destroying our unity. 
                    Compassion and tolerance require and emenate strength and should be our society's foremost
                    virtues.
                    </p>
                </div>
            </div>


            <div className = 'box1 box'>
                <div className='content_box tc b grow'>
                    <CountUp className= 'counter_text'  end={800000} duration={5}/>
                    <p>Suicides every year.</p>
                </div>
            </div>

            <div className = 'box2 box'>
                <div className='content_box tc b grow'>
                    <CountUp className= 'counter_text'  end={84500000} duration={5}/>
                    <p>People in India suffering from some form of mental illness</p>
                </div>     
            </div>

            <div className = 'box3 box'>
                <div className='content_box tc b grow'>
                    <CountUp className= 'counter_text'  end={276000000} duration={5}/>
                    <p>People below the poverty line in India</p>
                </div>
            </div>

            <div className = ' box4 box'>
                <div className='content_box tc b grow'>
                    <CountUp className= 'counter_text'  end={7200} duration={5}/>
                    <p>Minors raped in India each year.</p>
                </div>
            </div>

            <div className = 'box5 box'>
                <div className='content_box tc b grow'>
                    <CountUp className= 'counter_text'  end={8245} duration={5}/>
                    <p>Reported cases of communal violence in the past decade.</p>
                </div>
            </div>

            <div className = 'box6 box'>
                <div className='content_box tc b grow'>
                    <CountUp className= 'counter_text'  end={1214} duration={5}/>
                    <p>Deaths due to communal violence in the past decade.</p>
                </div>
            </div>

            <div className='bottom box'>
                <div className='content_box content_bottom tc b grow'>
                    <p>Find Inspiration</p>
                </div>

            </div>
            
        </div>
    )
}

export default Page1;