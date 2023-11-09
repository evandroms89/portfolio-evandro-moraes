import "./MySkills.css"

export default function MySkills() {

  return (
    <section className="skills--section" id="mySkills">
      <div>
        <h2 className="skills--section--heading"><span>./</span>habilidades</h2>
      </div>
      <div className="skills--section--container">
          <div className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">/Front-End</h3>
              <p className="skills--section--description">
                <span>&lt;</span> html <span>&gt; &lt;/html &gt;</span><br></br>
                <span>&lt;</span> css <span>&gt; &lt;/css &gt;</span><br></br>
                <span>&lt;</span> javascript <span>&gt; &lt;/javascript &gt;</span><br></br>
                <span>&lt;</span> react <span>&gt; &lt;/react &gt;</span><br></br>
                <span>&lt;</span> bootstrap <span>&gt; &lt;/bootstrap &gt;</span><br></br>
                <span>&lt;</span> sass <span>&gt; &lt;/sass &gt;</span><br></br>
              </p>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">/Integração_Back-End</h3>
              <p className="skills--section--description">
                <span>&lt;</span> nodejs <span>&gt; &lt;/nodejs &gt;</span><br></br>
                <span>&lt;</span> git <span>&gt; &lt;/git &gt;</span><br></br>
                <span>&lt;</span> github <span>&gt; &lt;/github &gt;</span><br></br>
                <span>&lt;</span> ajax <span>&gt; &lt;/ajax &gt;</span><br></br>
                <span>&lt;</span> gulp <span>&gt; &lt;/gulp &gt;</span><br></br>
                <span>&lt;</span> grunt <span>&gt; &lt;/grunt &gt;</span><br></br>
              </p>
            </div>
          </div>
          <div className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">/Design</h3>
              <p className="skills--section--description">
                <span>&lt;</span> photoshop <span>&gt; &lt;/photoshop &gt;</span><br></br>
                <span>&lt;</span> illustrator <span>&gt; &lt;/illustrator &gt;</span><br></br>
                <span>&lt;</span> inDesign <span>&gt; &lt;/inDesign &gt;</span><br></br>
                <span>&lt;</span> premiere <span>&gt; &lt;/premiere &gt;</span><br></br>
                <span>&lt;</span> figma <span>&gt; &lt;/figma &gt;</span><br></br>
              </p>
            </div>
          </div>
      </div>
    </section>
  );
}
