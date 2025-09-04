import './Skills.css' ;
import uidesign from '../../assets/ui-design.png'
import webdesign from '../../assets/website-design.png'
import app from '../../assets/app-design.png'
const Skills = () => {
  return (
   <>
   <section id='skills'>
    <span className='skilltitle'  data-aos="slide-up" data-aos-delay="500">What I do</span>
    <span className="skilldesc"  data-aos="slide-up" data-aos-delay="600">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
        I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and Javascript, as well as design software .
        </span>
        <div className="skillbars">
            <div className="skillbar"  data-aos="zoom-in" data-aos-delay="500">
            <img src={uidesign} alt="" className = 'skillbar-img'/>
            <div className="skillbar-text" data-aos="fade-up" data-aos-delay="520">
                <h2>UI/UX design</h2>
                <p>I specialize in creating user interfaces that are not only visually appealing but also highly intuitive and user-friendly. I focus on user flows, wireframes, and responsive layouts to ensure a seamless experience across all devices.</p>
            </div>
            </div>
        <div className="skillbar" data-aos="zoom-in" data-aos-delay="520">
            <img src={webdesign} alt="" className='skillbar-img'/>
            <div className="skillbar-text" data-aos="fade-up" data-aos-delay="540">
                <h2>Website design</h2>
                <p>I design and build responsive websites that combine modern design trends with best practices in performance, accessibility, and SEO. From landing pages to complete web platforms, I ensure every project is functional and future-ready.</p>
            </div>
        </div>
        <div className="skillbar" data-aos="zoom-in" data-aos-delay="540">
            <img src={app} alt="" className='skillbar-img'/>
            <div className="skillbar-text" data-aos="fade-up" data-aos-delay="560">
                <h2>Data Structure And Algorithm</h2>
                <p>I have a strong foundation in data structures and algorithms, which helps me write efficient and optimized code. I regularly solve DSA problems on platforms like LeetCode and GeeksforGeeks, focusing on time and space complexity. My knowledge includes arrays, linked lists, stacks, queues,and more.</p>
            </div>
        </div>
        </div>
   </section>
   </>
  )
}

export default Skills