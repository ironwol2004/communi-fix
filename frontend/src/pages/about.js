import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

const AboutUsPage = (props) => {
    return (
        <div className="bg-primary text-secondary mb-20">
            <Header></Header>
            <div className="w-3/5 mx-auto rounded-3xl p-4 py-8 box-border border-black border-4 my-12 bg-purple-50">
                <h1 className="text-center font-bold text-4xl mb-8 text-purple-950">About Us</h1>
                <p className="text-center leading-relaxed mb-8">
                    Welcome to our company! We are a team of passionate and experienced developers who are dedicated to building high-quality web applications. Our mission is to help our clients achieve their goals by providing them with innovative and effective solutions.
                </p>
                <div>

        <div >
             <div className="text-center font-semibold text-2xl mt-2  mb-8">
                 OUR STORY
             </div>
             <p className="text-center mb-8">
                 Welcome to COMMUNI-FIX, your go-to platform for posting and solving everyday problems. Our app aims to connect individuals seeking solutions with businesses ready to provide assistance, fostering a community-driven approach to problem-solving.</p>
             <div className="text-center font-semibold text-2xl mt-16 flex  justify-evenly">
                    
                
                
                 <div className="flex-col mb-8"> 
                    FOUNDER
                    <p className="text-base">
                            ASHISH
                    </p>

                 </div>
                 <div className="my-23">
                    CO-FOUNDER
                    <p className="text-base">
                        AKASH
                    </p>
                 
                 </div>
                 <div className="my=10  ">
                    CO-FOUNDER
                    <p className="text-base" >
                        DEEPAK
                    </p>
                 </div>
             </div>
             <div className="text-center font-semibold text-2xl mt-2 mb-8 ">
                 Contact us
                 <div className="text-center font-semibold text-2xl mt-2 flex  justify-evenly">
                 <div className="mb-8  ">
                 <p className="text-base  mt-2">
                        PHONE NUMBER:4543423
                    </p>
                    <p className="text-base mt-2">
                        EMAIL ID: abc@gamil.com
                    </p>
                 </div>
                 
                 </div>
             </div>
         </div>

     </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUsPage;