import React from 'react';
import { Link } from 'react-router-dom';

const OurMedia = () => {
    return (
        <div>

            <div className='text-center'>
                <h4 className='text-2xl font-semibold'>Our Media</h4>
                <h2 className='text-5xl font-bold'>See what our students can do</h2>
                <p className='my-4 md:w-1/2 mx-auto'>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus metus. Donec eu volutpat nibh, in maximus ligula.</p>
            </div>

            <div className='flex justify-center'>
                <Link to="https://www.youtube.com/watch?v=6czXoU1__hg"><img src="https://i.ibb.co/5B7KcdM/MusicImg.png" className="" alt="" /></Link>
            </div>

        </div>
    );
};

export default OurMedia;