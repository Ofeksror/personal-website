import React from 'react'
import styles from './ProjectsDisplay.module.css'

interface ProjectType {
    title: string,
    description: string,
    image: string,
    link: string,
    tags: string[],
}

const Projects: ProjectType[] = [
    {
        title: "AI English Coach",
        description: "Improve your English skills through interactive AI-powered conversations",
        image: "",
        link: "https://ai-english.ofeksror.com",
        tags: ["React", "TypeScript", "Next.js"],
    },
    {
        title: "Bug Tracker",
        description: "Improve your English skills through interactive AI-powered conversations",
        image: "",
        link: "",
        tags: ["Python", "Flask", "SQLite"],
    },
]

const ProjectsDisplay = () => {
  return (
    <div>
        <h1>Projects</h1>
        <div className={styles.projectsGallery}>
            {
                Projects.map((project) => (<ProjectCard project={ project } />))
            }
        </div>
    </div>
  )
}

const ProjectCard = ({ project }: {project: ProjectType}) => {
    return (
        <div className={ styles.projectCard } onClick={ () => { window.open(project.link, '_blank') } }>
            <h1>{ project.title }</h1>
            <p>{ project.description }</p>
            <img src={ project.image } alt={ project.title } />
            
            <div className={styles.cardTags}>
                { project.tags.map((tag) => {
                    return (
                        <span>{ tag }</span>
                    )
                }) }
            </div>
        </div>
    )
}

export default ProjectsDisplay