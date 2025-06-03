import './Skills.css' ;
import uidesign from '../../assets/ui-design.png'
import webdesign from '../../assets/website-design.png'
import app from '../../assets/app-design.png'
const Skills = () => {
  return (
   <>
   <section id='skills'>
    <span className='skilltitle'>What I do</span>
    <span className="skilldesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
        I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and Javascript, as well as design software such as 
        Adobe Photoshop and Illustrator.
        </span>
        <div className="skillbars">
            <div className="skillbar">
            <img src={uidesign} alt="" className = 'skillbar-img'/>
            <div className="skillbar-text">
                <h2>UI/UX design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo atque quidem dignissimos, blanditiis voluptatum. Non sunt dolores quaerat id?</p>
            </div>
            </div>
        <div className="skillbar">
            <img src={webdesign} alt="" className='skillbar-img'/>
            <div className="skillbar-text">
                <h2>Website design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum autem dolor optio, consequuntur impedit harum minus quisquam consectetur a ex.</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={app} alt="" className='skillbar-img'/>
            <div className="skillbar-text">
                <h2>App design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sunt asperiores soluta tempore voluptatum illo dolorem, sapiente autem eveniet rem.</p>
            </div>
        </div>
        </div>
   </section>
   
   </>
  )
}

export default Skills