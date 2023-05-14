import React from 'react'
import styles from './ProjectsDisplay.module.css'
import Image from 'next/image'

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
        // description: "Improve your English skills through interactive AI-powered conversations",
        // "designed to strengthen your verbal skills, grammar, pronunciation, and boost your confidence."
        description: "Enhance your English proficiency through interactive AI-powered conversations",
        image: "/englishCoachDemo.png",
        link: "https://ai-english.ofeksror.com",
        tags: ["React", "TypeScript", "Next.js"],
    },
    {
        title: "Bug Tracker",
        description: "Project management tool for teams to track bugs and issues in their projects",
        image: "/BugTrackerDemo.png",
        link: "https://ofeksror.pythonanywhere.com",
        tags: ["Python", "Flask", "SQLite"],
    },
]

const ProjectsDisplay = () => {
  return (
    <div className={styles.projectsContainer}>
        <h1>Projects</h1>
        <div className={styles.projectsGallery}>
            {
                Projects.map((project, index) => (<ProjectCard key={index} project={ project } />))
            }
        </div>
    </div>
  )
}

const ProjectCard = ({ project }: {project: ProjectType}) => {
    return (
        <div className={ styles.projectCard }>
            {/* project.image*/ }
            <div className={styles.projectImage}>
                <button onClick={ () => { window.open(project.link, '_blank') } }>Visit</button>
                <Image src={ project.image } width={981} height={1313} alt={ project.title } />
            </div>

            <div className={ styles.projectContent }>
                <h1>{ project.title }</h1>
                <p>{ project.description }</p>
                
                <div className={styles.cardTags}>
                    { project.tags.map((tag, index) => {
                        return (
                            <span key={index}>{ tag }</span>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
}

export default ProjectsDisplay