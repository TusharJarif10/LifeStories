import React, { useState, useEffect } from 'react';

// import data
import { eventsData } from '../data';
import { eventsNav } from '../data';

// import components
import Event from './event';

const Events = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [events, setEvents] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        // get projects based on item
        if (item.name === 'all') {
            setEvents(eventsData);
        } else {
            const newEvents = eventsData.filter((event) => {
                return event.name.toLowerCase() === item.name;
            });
            setEvents(newEvents);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div>
            {/* events nav */}
            <nav className='mb-10 px-2 max-w-screen-lg items-center justify-center mx-auto text-sm'>
                <ul className='grid md:grid-cols-5 grid-cols-2 gap-y-2  justify-center items-center text-gray-600 '>
                    {eventsNav.map((item, index) => {
                        return (

                            <li
                                onClick={(e) => {
                                    handleClick(e, index);
                                }}
                                className={`${active === index ? 'active' : 'in-active'
                                    } cursor-pointer capitalize `}
                                key={index}
                            >
                                <div class=' text-center'>
                                    {item.name}
                                    
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>


            {/* events */}
            <section className='grid gap-2 lg:grid-cols-3 grid-cols-1 lg:gap-x-2 lg:gap-y-2'>
                {events.map((item) => {
                    return <Event item={item} key={item.id} />;
                })}
            </section>
        </div>
    );
};

export default Events;
