const About = () => {
    return (
        <>
            <h2>About</h2>
            <p>I am a junior at UC Berkeley studying computer science and philosophy. I am very interested in both fields in themselves and also the intersection of the two fields in areas like philosophy of technology. I have been interested in mathematics recently as well and have been studying it on my own time.
            </p>
            <h3>Resume</h3>
            <p>My resume is embedded below (formatting broken for embeds) and available directly <a href = "https://docs.google.com/document/d/1O76EYR6dR7uIqCRWxxhVQzUCRhIuIyfHJkC8xroZlTg/edit?usp=sharing">here</a>.</p>
            <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'lightblue'
            }}>
                <iframe 
                    src="https://docs.google.com/document/d/e/2PACX-1vRixhK8s0ar8cbTuXTx8HPb744ZaX9u9pmnDaqb0p6x0rT8XhJDooY1m4YJ8DZaRQqjXbGpmk_ERxlV/pub?embedded=true" 
                    width="850" 
                    height="1100"
                ></iframe>
            </div>
        </>
        )
}

export default About