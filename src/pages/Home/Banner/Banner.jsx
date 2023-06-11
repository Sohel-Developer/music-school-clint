import React from 'react';


const Banner = () => {
    return (
        <div className="hero h-[700px] banner" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p className="mb-5 text-yellow-400 font-bold text-3xl">Playing Guitar —</p>
                    <h1 className="mb-5 text-7xl font-bold">Realy Easy</h1>
                    <p>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus metus. Donec eu volutpat nibh, in maximus ligula.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;