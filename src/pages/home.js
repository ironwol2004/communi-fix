import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import homeImage from '../../src/images/HomeImage.jpg';
import Typewriter from 'typewriter-effect';

function Home(props){
 
    return <div>
        <Header></Header>
        <div className="min-h-screen bg-gray-100">
        <div className="relative h-48">
                <img src={homeImage} alt="About us Image" className="opacity-70 h-full w-full border-solid border-2 border-gray-400" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                </div>
        </div>
        <div>
        <div className="text-center my-4 ">
    
    <div className="text-red-850 text-3xl font-bold">
        <Typewriter
            options={{
                strings: ['Community Problem', 'Investor Collaboration', 'Feasible Solution','Mutual Benefits'],
                autoStart: true,
                loop: true,
                delay: 50,
            }}
        />
    </div>
</div>
        </div>

      <section className="mb-10 mt-1 flex  justify-center items-center p-4 w-3/4 pl-64">
        <div className="bg-white shadow-md rounded p-4 m-2 flex-1">
          <h1 className="font-bold text-purple-800">How it's Work!</h1>
          <p className="my-5">Communi-Fix is a platform connecting communities and businesses. Communities report local issues, and businesses invest in solutions, providing needed resources. This resolves community problems and offers potential returns for businesses, creating a mutually beneficial relationship.</p>
        </div>

      </section>
    </div>
        <Footer></Footer>
    </div>
}
export default Home;

