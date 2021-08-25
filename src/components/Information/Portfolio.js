import React from "react";
import projects from "../../projectData.json";
import Project from "../Project";
import "./style.css";

const Portfolio = function() {
    const projectList = projects.map((project) => {
        return <Project
            id={project.id}
            name={project.name}
            github={project.github}
            deployment={project.deployment}
            img={project.img}
            description={project.description}
            tech={project.tech}
        />
    })

    return (
        <div className="row content-body">
            <div className="col-12">
                {projectList}
            </div>
        </div>
    )
}

export default Portfolio;