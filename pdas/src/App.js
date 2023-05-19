import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import cortanaImg from "./images/cortana.png";
import siriImg from "./images/siri.png";
import alexaImg from "./images/alexa.png";

function App(){
    return (<>

<section class="hero is-success">
  <div class="hero-body">
    <p class="title">
    Personal digital Assistants
    </p>
    
  </div>
</section>
    <div className='container'>
        <section className='section'>
            <div className="columns">
                <div className="column is-4">
                    <ProfileCard title = "Alexa" handle = "@Alexa" image= {alexaImg} content = "Hello! I am Alexa."/>  
                </div>
                <div className="column is-4">
                    <ProfileCard title = "Cortana" handle = "@Cortana" image = {cortanaImg} content = "Hello! I am Cortana."/>
                </div>
                <div className="column is-4">
                    <ProfileCard title = "Siri" handle = "@siri" image = {siriImg} content = "Hello! I am Siri."/>
                </div>
            </div>
        </section>
    </div>
    
    </>);
}

export default App;