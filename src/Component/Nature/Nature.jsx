import React from 'react';

const Nature = () => {
    return (
        <section className='bg-zinc-900 mt-20 ml-2 mr-2 pb-12'>
            <div className='text-center'>
                <span className='text-orange-400 pt-16'>What we're offering</span>
                <h1 className='text-slate-50 text-4xl w-96 mx-auto pt-8'>Feel real adventure and very close nature</h1>
            </div>

            <div className='grid grid-cols-5 gap-2 mt-8'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img  src="Public/img/travel/t1.jpg" alt="Shoes" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Camfire activity</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, iusto.</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src="Public/img/travel/t2.jpg" alt="Shoes" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Adventure</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quis?</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src="Public/img/travel/t3.jpg" alt="Shoes" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tent Camping</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, deserunt!</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl ">
                    <figure>
                        <img src="Public/img/travel/t4.jpg" alt="Shoes" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mountain hiking</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, harum!</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="Public/img/travel/t5.jpg" alt="Shoes" className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Campfire activity</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, numquam.</p>
                        <div className="card-actions">
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='text-9xl text-center text-amber-600 mt-8'>Adventure</h1>

            <div className='grid grid-cols-3 justify-around items-center gap-4 mt-12 '>
                <p className='text-slate-50 pl-6'>Dedicated team member</p>
                <img className="rounded-full h-40" src="Public/img/travel/t4.jpg" alt="" />
                <div>
                    <p className='text-slate-50'>Become a team Member</p>
                    <div className='flex'>
                        <img className='w-28 h-10' src="Public/img/travel/t2.jpg" alt="" />
                        <span className='text-slate-50'>+(0123)456888</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nature;