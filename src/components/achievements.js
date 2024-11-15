import React, { useEffect, useState } from 'react';
import '../styles/Achievements.css';
import { ReactComponent as MoneybagIcon } from '../assets/moneybag.svg';
import { ReactComponent as SatisfactionIcon } from '../assets/satisfaction.svg';
import { ReactComponent as PartnershipsIcon } from '../assets/partnerships.svg';
import { ReactComponent as MembersIcon } from '../assets/members.svg';

const Achievements = () => {
    const [revenue, setRevenue] = useState(0);
    const [partnerships, setPartnerships] = useState(0);
    const [members, setMembers] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);

    const startCount = (setState, endValue) => {
        let count = 0;
        const interval = setInterval(() => {
            if (count < endValue) {
                count++;
                setState(count);
            } else {
                clearInterval(interval);
            }
        }, 50); 
    };

    useEffect(() => {
        startCount(setRevenue, 10000);
        startCount(setPartnerships, 5);
        startCount(setMembers, 50);
        startCount(setSatisfaction, 95);
    }, []);

    return (
        <div className='Achievements-container'>
            <h1 className='Achievements-title'>
                YOU CAN COUNT ON US
            </h1>
            <div className='images-container'>
                <div className='image-container'>
                    <MoneybagIcon alt='Revenue icon' className="icon" />
                    <span className='image-description'>
                        <span>{revenue}+ </span>of revenue
                    </span>
                </div>
                <div className='image-container'>
                    <PartnershipsIcon alt='Partnerships icon' className="icon" />
                    <span className='image-description'>
                        <span>{partnerships}+ </span>partnerships
                    </span>
                </div>
                <div className='image-container'>
                    <MembersIcon alt='Junior entrepreneurs icon' className="icon" />
                    <span className='image-description'>
                        <span>{members}+ </span>junior entrepreneurs
                    </span>
                </div>
                <div className='image-container'>
                    <SatisfactionIcon alt='Satisfaction icon' className="icon" />
                    <span className='image-description'>
                        <span>{satisfaction}% </span>satisfaction
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
