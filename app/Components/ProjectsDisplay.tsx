import React, { useRef } from "react";
import styles from "./ProjectsDisplay.module.css";
import Image from "next/image";
import { MdClose } from "react-icons/md";

interface ProjectType {
    title: string;
    description: string;
    image: string;
    link: string;
    buttonText: string;
    tags: string[];
}

const Projects: ProjectType[] = [
    {
        title: "Tab & Bookmark Manager",
        description:
            "Effortlessly switch between the projects you work on with a better workflow for tab and resources management",
        image: "/tabManager.png",
        link: "https://github.com/Ofeksror/TabManager",
        buttonText: "New!",
        tags: [
            "Next.js",
            "React",
            "TypeScript",
            "MongoDB",
            "TailwindCSS",
        ],
    },
    {
        title: "AI English Coach",
        // description: "Improve your English skills through interactive AI-powered conversations",
        // "designed to strengthen your verbal skills, grammar, pronunciation, and boost your confidence."
        description:
            "Enhance your English proficiency through interactive AI-powered conversations",
        image: "/englishCoachDemo.png",
        link: "https://ai-english.ofeksror.com",
        buttonText: "Try the Demo",
        tags: ["React", "TypeScript", "Next.js"],
    },
    {
        title: "Bug Tracker",
        description:
            "Project management tool for teams to track bugs and issues in their projects",
        image: "/bugTrackerDemo.png",
        link: "https://ofeksror.pythonanywhere.com",
        buttonText: "Try the Demo",
        tags: ["Python", "Flask", "SQLite"],
    },
    {
        title: "Turing Machine Interpreter",
        description:
            "Short program that simulates turing machine instructions (Homework checker for school)",
        image: "/turingInterpreter.jpg",
        link: "https://github.com/Ofeksror/turingCompilerMachine",
        buttonText: "Source Code",
        tags: ["Python"],
    },
];

const ProjectsDisplay = () => {
    return (
        <>
            <span className={styles.anchor} id="projectsSection"></span>
            <div className={styles.projectsContainer}>
                <h1 className={styles.projectsTitle}>Projects</h1>
                <div className={styles.projectsGallery}>
                    {Projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                    {/* <PortfolioProjectCard /> */}
                </div>
            </div>
        </>
    );
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
    return (
        <div className={styles.projectCard}>
            {/* project.image*/}
            <div className={styles.projectImage}>
                <button
                    onClick={() => {
                        window.open(project.link, "_blank");
                    }}
                >
                    {project.buttonText}
                </button>
                <Image
                    src={project.image}
                    width={981}
                    height={1313}
                    alt={project.title}
                />
            </div>

            <div className={styles.projectContent}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>

                <div className={styles.cardTags}>
                    {project.tags.map((tag, index) => {
                        return <span key={index}>{tag}</span>;
                    })}
                </div>
            </div>
        </div>
    );
};

const PortfolioProjectCard = () => {
    const dialogElement = useRef<HTMLDialogElement>(null);

    const openDialog = () => dialogElement.current?.showModal();
    const closeDialog = () => dialogElement.current?.close();

    return (
        <>
            <div className={styles.projectCard}>
                <div className={styles.projectImage}>
                    <button onClick={openDialog}>Click Me!😉</button>
                    <Image
                        src={"/portfolio.png"}
                        width={981}
                        height={1313}
                        alt={"Personal Portfolio"}
                    />
                </div>

                <div className={styles.projectContent}>
                    <h1>Personal Portfolio</h1>
                    <p>Practiced CSS</p>

                    <div className={styles.cardTags}>
                        <span>React</span>
                        <span>CSS</span>
                        <span>HTML</span>
                    </div>
                </div>
            </div>

            <dialog ref={dialogElement} className={styles.modal}>
                <button
                    className={styles.modalCloseButton}
                    onClick={closeDialog}
                >
                    <MdClose />
                </button>
                <div>
                    <iframe src="https://ofeksror.com/#projectsSection"></iframe>
                </div>
            </dialog>
        </>
    );
};

export default ProjectsDisplay;
