import React from "react";
import ProjectCard from "./ProjectCard";
import Subnav from "../Subnav";

const rawImages = ["/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", 
    "/banner1.jpeg",];


function Engineering() {

    return(

        <div>
            <Subnav />
            <div className="lg:mx-30 md:mx-20 sm:mx-10 mt-20">
                <div className="grid lg:grid-cols-12 md:grid-cols-6 lg:mb-30 md:mb-20 sm:mb-10 gap-6">
                <div className="col-span-6">
                    <h1 className="text-black/90 font-bold lg:text-5xl md:text-3xl">Our Engineering Services are setting Industry's Standards</h1>
                </div>
                <div className="col-span-6">
                    <p style={{fontSize: '17px'}}>Our areas of expertise encompass a wide range of engineering services,
                         such as project management and administration, conceptual studies, 
                         Front End Engineering Design (FEED) leading to Detailed Engineering Design, 
                         Installation Engineering, Construction Management, Integrity Management, 
                         Procurement and Construction Support, and Hookup and Commissioning Assistance.</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-12 md:grid-cols-6 mb-10 gap-20">
                <div className="col-span-6">
                    <h1 className="font-bold text-2xl mb-4">Conceptual Engineering</h1>
                    <p className="font-normal" style={{fontSize: '17px'}}>Our team focuses on functional requirements, systematic engineering and decision 
                        quality process during feasibility study by 
                        studying all project stakeholder perspectives and reviewing economic return.</p>
                </div>
                <div className="col-span-6">
                    <h1 className="font-bold text-2xl mb-4">Front End Engineering Design</h1>
                    <p className="font-normal" style={{fontSize: '17px'}}>Our FEED solutions provide certainty of delivery and a high level of 
                        reliability. Our cost estimates are based on legacy and market data 
                        from our construction and installation experience as well as from procurement 
                        and vendor network. Our designs reflect proven construction and installation 
                        practices to ensure reliable, efficient, 
                        quality project delivery, lower costs, and faster FEEDs.</p>
                </div>
                <div className="col-span-6">
                    <h1 className="font-bold text-2xl mb-4">Detail Design</h1>
                    <p className="font-normal" style={{fontSize: '17px'}}>Our approach to detailed engineering is characterized by a meticulous 
                        examination of specific project intricacies. We prioritize precision 
                        in our engineering processes, ensuring that every detail is thoroughly 
                        analyzed and addressed. Our comprehensive methodology involves an in-depth 
                        exploration of technical specifications, meticulous planning, and the integration 
                        of advanced engineering practices. By upholding the highest standards in detailed engineering, 
                        we aim to optimize project performance, 
                        enhance efficiency, and deliver solutions that exceed expectations.</p>
                </div>

                <div className="col-span-6">
                    <h1 className="font-bold text-2xl mb-4">Installation Engineering</h1>
                    <p className="font-normal" style={{fontSize: '17px'}}>Leveraging years of expertise and a wealth of knowledge in constructability,
                         we excel in installation engineering. Our proficiency extends across diverse disciplines, 
                         and we integrate best practices seamlessly into our design teams. 
                         This ensures that our installation engineering not only benefits from extensive 
                         experience but also incorporates the latest industry standards, 
                         guaranteeing a streamlined and effective approach to the installation phase of your project.</p>
                </div>
            </div>
            </div>
            <h1 className="font-bold text-5xl lg:mt-32 md:mt-16 sm:mt-10 mb-8 lg:mx-28 md:mx-10 sm:mx-5">Recent Projects</h1>
            <ProjectCard rawImages={rawImages} groupSize={5} />
        </div>
    )
}
export default Engineering;