const ProjectScroll = (props) => {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'row',
        overflowY: 'auto',
        height: '100%', // adjust this value as needed
      },
    };
  
    return (
      <div style={styles.container}>
        {props.children}
      </div>
    );
  };

const ProjectBox = (props) => {
    return (
        <div style={{ 
            minWidth: '600px', 
            maxWidth: '600px', 
            backgroundColor: '#f2f2f2', // lighter shade of gray
            margin: '10px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            borderRadius: '10px' // round corners
        }}>
            <h5>{props.name}</h5>
            {props.children}
            <div style={{minWidth : '400px', maxWidth: '500px'}}>
                <p style={{ wordWrap: 'break-word', overflowWrap: 'break-word'}}>{props.desc}</p>
            </div>
        </div>
    )
}
// TODO: put projects in separate file and load from there
const Projects = () => {
    return (
        <>
            <h2>Projects</h2>
            <p>Here are some highlighted computer science projects I have done.</p>

            <h3>Class</h3>
            
            <ProjectScroll>
                <ProjectBox name = "Dungeon Exploration Game (Fall 2023)" desc = "Collaborated with a partner to create a 2D exploration game and, as a bonus, developed a rudimentary raycasting engine for enabling a 3D view for the game.">
                    <div className="video-responsive">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VIZSBxT03Bo?si=AiBMQ_CRtB4cCc8D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <a href="https://fa23.datastructur.es/materials/proj/proj3/">Project Spec</a>
                </ProjectBox>

                <ProjectBox name = "File Sharing System" desc = "Worked with a partner to design a secure file sharing system enabling users to log in, store files, and share files while in the presence of attackers. Implemented the system utilizing various encryption and verification functions from provided cryptography library.">
                    <a href="https://su24.cs161.org/proj2/policies/">Project Spec</a>
                </ProjectBox>

                <ProjectBox name = "CS61CPU" desc = "Built a CPU that runs RISC-V assembly instructions using logic gates in Logisim." >
                    <a href="https://cs61c.org/sp24/projects/proj3/">Project Spec</a>
                </ProjectBox>

                <ProjectBox name = "Scheme Interpreter" desc = "Wrote an interpreter for Scheme in Python." >
                    <a href="https://inst.eecs.berkeley.edu/~cs61a/sp23/proj/scheme/">Project Spec</a>
                </ProjectBox>

            </ProjectScroll>
            
            <h3>Professional</h3>

            <ProjectScroll>
                <ProjectBox name = "Diet App" desc = "WIP">

                </ProjectBox>
            </ProjectScroll>

            <h3>Personal</h3>

            <ProjectScroll>
                <ProjectBox name = "Hackathon Cooking App (Summer 2024)" desc = "Developed an app for generating recipe suggestions using React Native for UC Berkeley AI Hackathon. Integrated AI features using OpenAI API for visual processing and text/image generation.">
                    <div className="video-responsive">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PA-jGcjEBK0?si=Ocbp3Ixbcr-a8MJW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </ProjectBox>

            </ProjectScroll>

        </>
        )
}

export default Projects