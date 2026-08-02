import './App.css'
import pdfSrc from "./assets/Nathaniel-Pruitt-Resume.pdf"

const asciiArt = `
   ▄▄     ▄▄▄                                  ▄▄     ▄▄▄▄▄▄                       
   ██▄   ██▀      █▄ █▄                         ██   █▀██▀▀▀█▄              █▄  █▄ 
   ███▄  ██      ▄██▄██          ▄     ▀▀       ██     ██▄▄▄█▀▄          ▀▀▄██▄▄██▄
   ██ ▀█▄██ ▄▀▀█▄ ██ ████▄ ▄▀▀█▄ ████▄ ██ ▄█▀█▄ ██     ██▀▀▀  ████▄██ ██ ██ ██  ██ 
   ██   ▀██ ▄█▀██ ██ ██ ██ ▄█▀██ ██ ██ ██ ██▄█▀ ██   ▄ ██     ██   ██ ██ ██ ██  ██ 
 ▀██▀    ██▄▀█▄██▄██▄██ ██▄▀█▄██▄██ ▀█▄██▄▀█▄▄▄▄██   ▀██▀    ▄█▀  ▄▀██▀█▄██▄██ ▄██ 
`

const skillsAciiArt = `
  ▄▄▄▄▄            ▄▄ ▄▄            ▄▄▄▄         ▄▄▄▄▄▄                                    
 ██▀▀▀▀█▄           ██ ██          ██  ██       █▀██▀▀▀█▄     ▄                          ▄ 
 ▀██▄  ▄▀ ▄▄     ▀▀ ██ ██          ▀██▄█▀         ██▄▄▄█▀    ▀               ▄          ▀  
   ▀██▄▄  ██ ▄█▀ ██ ██ ██ ▄██▀█    ▄████▄▄█▀      ██▀▀█▄   ▄█▀█▄ ▄██▀█ ██ ██ ███▄███▄ ▄█▀█▄
 ▄   ▀██▄ ████   ██ ██ ██ ▀███▄   ██▀  ██▄      ▄ ██  ██   ██▄█▀ ▀███▄ ██ ██ ██ ██ ██ ██▄█▀
 ▀██████▀▄██ ▀█▄▄██▄██▄███▄▄██▀   ▀█▄▄██▀▀█▄    ▀██▀  ▀██▀▄▀█▄▄▄█▄▄██▀▄▀██▀█▄██ ██ ▀█▄▀█▄▄▄
`

const projectsAsciiArt = `
  ▄▄▄▄▄▄                                    
 █▀██▀▀▀█▄                          █▄      
   ██▄▄▄█▀▄          ▀▀            ▄██▄     
   ██▀▀▀  ████▄▄███▄ ██ ▄█▀█▄ ▄███▀ ██ ▄██▀█
 ▄ ██     ██   ██ ██ ██ ██▄█▀ ██    ██ ▀███▄
 ▀██▀    ▄█▀  ▄▀███▀▄██▄▀█▄▄▄▄▀███▄▄███▄▄██▀
                     ██                     
                   ▀▀▀                      
`

const contactAsciiArt = `
 ▄   ▄▄▄▄                               
 ▀██████▀             █▄             █▄ 
   ██           ▄    ▄██▄           ▄██▄
   ██     ▄███▄ ████▄ ██ ▄▀▀█▄ ▄███▀ ██ 
   ██     ██ ██ ██ ██ ██ ▄█▀██ ██    ██ 
   ▀█████▄▀███▀▄██ ▀█▄██▄▀█▄██▄▀███▄▄██ 
`

const skillsTable = `
+====================+============+=======================+===================+
|     Languages      | Frameworks |         Tools         | Operating Systems |
+====================+============+=======================+===================+
| Python             | React      | Docker/Docker Compose | Linux             |
+--------------------+------------+-----------------------+-------------------+
| Javascript/Node.js | Gin        | Git                   | Windows           |
+--------------------+------------+-----------------------+-------------------+
| Typescript         | Spring     | Bash                  |                   |
+--------------------+------------+-----------------------+-------------------+
| Golang             | FastAPI    | Nginx                 |                   |
+--------------------+------------+-----------------------+-------------------+
| C                  | Express    | npm                   |                   |
+--------------------+------------+-----------------------+-------------------+
| Java               |            | AWS Cloud Services    |                   |
+--------------------+------------+-----------------------+-------------------+
`

function App() {
  return (
    <div className='content'>
      <div className='center-content'>
        <pre className='main'>{asciiArt}</pre>
        <p className='centered-text'>
          I am a software engineer looking for work in the Greater Seattle area 🌧️ (I am open to remote as well).
          I am looking for internship and entry level engineering roles in back-end and full-stack roles, as well
          as roles in security and low-level programming.
        </p>
        
        <b>
          <a className='project-link' href='https://github.com/NatePruitt1'>Github</a> -&nbsp;
          <a className='project-link' href='https://www.linkedin.com/in/nathaniel-pruitt-a15ab6262'>LinkedIn</a>
        </b>

        <pre className='main smaller'>{skillsAciiArt}</pre>

        <pre className='centered-text'>{skillsTable}</pre>

        <a href={pdfSrc} download={"Nathaniel-Pruitt-Resume.pdf"} className='highlight-button'>Download Résumé</a>

        <pre className='main smaller'>{projectsAsciiArt}</pre>

        <div className='project-item'>
          <h4>Simple Todo Application</h4>
          <p>A simple todo application written in React-Typescript with a Go-Gin Backend. Deployed locally using Docker Compose and Cloudflare.</p>
          <p className='warning'><b>Note: This project is still under active development.</b></p>
          <p><b>Website <a href='https://kanban.nathanielpruitt.com' className='project-link'>https://kanban.nathanielpruitt.com</a> - Github <a href='https://github.com/NatePruitt1/TodoApp' className='project-link'>https://github.com/NatePruitt1/TodoApp</a></b></p>
        </div>

        <pre className='main smallest'>{contactAsciiArt}</pre>
        <p className='centered-text'>
          <b>
            <a className='project-link' href='nathaniel.n.pruitt@gmail.com'>nathaniel.n.pruitt@gmail.com</a> -
            (314)-502-3359 -&nbsp;
            <a className='project-link' href='https://github.com/NatePruitt1'>Github</a> -&nbsp;
            <a className='project-link' href='https://www.linkedin.com/in/nathaniel-pruitt-a15ab6262'>LinkedIn</a>
          </b>
        </p>
      </div>
    </div>
  )
}

export default App
