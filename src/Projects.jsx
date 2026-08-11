import './style.css'
import './projects.css'

export default function Projects() {
    return (
        <>
            <section id='projects'>
                <div className='taskboard'>
                    <div className='taskboard-header'>
                        <h1>Project #1</h1>
                        <p>A Kanban-style task board where users can manage work visually.</p>
                        <a href="https://github.com/maijagrimes/mytaskboard" target='blank_'>
                            <img src="/logos/GitHub_Invertocat_Black.png" alt="GitHub Link" />
                        </a>                        
                    </div>
                    <div className='taskboard-main'>
                    <div className='taskboard-left'>

                            <div className='stat'>
                                <h3>Features:</h3>
                                <ul>
                                    <li>Guest sessions</li>
                                    <li>Custom column colors</li>
                                    <li>Drag and drop tasks</li>
                                    <li>Upcoming due date flags</li>
                                </ul>
                            </div>
                            <div className='stat'>
                                <h3>Tech Stack:</h3>
                                <ul>
                                    <li>React + Vite</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Supabase</li>
                                </ul>
                            </div>
                    </div>
                    <div className="iframe-wrapper"> 
                            <iframe
                            src="https://mytaskboard.neocities.org/"
                            width="100%"
                            height="100%"
                            style={{ border: "none" }}
                            title="myTaskboard"
                            allow="cross-origin-isolated"
                            scrolling='no'
                            />
                    </div>                        
                    </div>
                </div>

                <div className='buff'>
                    <div className='buff-header'>
                        <a href="https://github.com/dahi2387/cu-marketplace/tree/main" target='blank_'><img src="/logos/GitHub_Invertocat_Black.png" alt="GitHub Link" /></a>
                        <p className='buff-label'>This project is not formally affiliated with CU Boulder!</p>
                        <h1>Project #2</h1>
                    </div>
                    <div className='buff-main'>
                        <div className="iframe-wrapper" style={{height: '650px', width: '900px', border: '5px solid rgb(200, 175, 113)' }}>
                                <iframe
                                src="https://cu-marketplace.onrender.com/"
                                width="100%"
                                height="100%"
                                style={{ border: "none", height: '645px', width: '900px' }}
                                title="myTaskboard"
                                allow="cross-origin-isolated"
                                />
                        </div>
                        <div className='buff-right'>
                            <div className='stat' style={{boxShadow: '0 0 1px 3px rgb(78, 162, 146)'}}>
                                <h3>Details:</h3>
                                <p>A full-stack development group project, built to provide a secure platform for students to exchange tickets to sporting events. </p>
                            </div>
                            <div className='stat' style={{boxShadow: '0 0 1px 3px rgb(226, 196, 121)'}}>
                                <h3>Features:</h3>
                                <ul>
                                    <li>Student verification</li>
                                    <li>Buy or sell tickets</li>
                                    <li>Transfer tickets</li>
                                    <li>Shareable listings</li>
                                </ul>
                            </div>
                            <div className='stat' style={{boxShadow: '0 0 1px 3px rgb(224, 131, 201)'}}>
                                <h3>Tech Stack:</h3>
                                <ul>
                                    <li>Handlebars</li>
                                    <li>Javascript + Node.js</li>
                                    <li>SQL</li>
                                    <li>JSON</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}