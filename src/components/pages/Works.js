import React from 'react'
import Project from '../layouts/Project'
import { projects, section3Title } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <center>
                    <div className="pp-head-line">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </center>
                <div className="row">
                {projects && projects.map((x) => 
                <Project id={x.id} url={x.url} name={x.name} skills={x.skills}/>
                )}
                </div>
            </div>
        </>
    )
}

export default Works
