// Import TechnologyCard
import TechnologyCard from "../components/TechnologyCard";

export default function AboutPage() {
    
    const techologies = [
        {
            name: "React",
            description: "JavaScript library for building user interfaces."
        },
         {
            name: "React Router",
            description: "Provides navigation between pages in React js."
        },
         {
            name: "Axios",
            description: "Used to make HTTP requests to APIs."
        },
         {
            name: "TVMaze API",
            description: "Provides TV show information employed in this application."
        },
         {
            name: "Bootstrap",
            description: "Styling FrameWork for responsive layouts."
        },
        {
            name: "UI Library",
            description: "A collection of reusable components for building responsive and interactive user interfaces."
        },
        {
            name: "SPA Navigation",
            description: "Allows users to move between pages without reloading the entire application."
        },
        {
            name: "API Requests",
            description: "Styling FrameWork for responsive layouts."
        }
    ];

    return (
        <div className="container mt-4">
            <h1>About React Movies Dashboard</h1>

            <p>
                This application allows users to search and discover TV shows
                using data from the TVMaze API.
            </p>

            <h2 className="mt-4">Technologies Used</h2>

            <div className="technology-grid">
                {techologies.map((tech) => (
                    <TechnologyCard
                        key={tech.name}
                        name={tech.name}
                        description={tech.description}
                    />
                )  )}
            </div>
        </div>
    );
}