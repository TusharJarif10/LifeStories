import React from 'react';

const Event = ({ item }) => {
    return (
        // <div key={item.id} className='flex flex-col items-center text-center'>
        //     <div className='mb-8'>
        //         <img className='rounded-2xl hover:scale-110' src={item.image} alt='' />
        //         <h4 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h4>
        //         <p className='capitalize text-blue-900 text-sm mb-3'>{item.description}</p>
        //     </div>
        // </div>

        <div key={item.id} class="relative overflow-hidden rounded-md shadow--lg group">
            <img src={item.image} alt='' class="w-full h-56 object-cover" />
            <div
                class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-2">
                    <h4 class="text-xl font-bold text-white">{item.name}</h4>
                    <p class="text-white">{item.description}</p>
                </div>
            </div>
        </div>

    );
};

export default Event;
