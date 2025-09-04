
import './Works.css'
  import portfolio1 from'../../assets/portfolio-1.png'
  import portfolio2 from'../../assets/portfolio-2.png'
  import portfolio3 from'../../assets/portfolio-3.png'
  import portfolio4 from'../../assets/portfolio-4.png'
  import portfolio5 from'../../assets/portfolio-5.png'
  import portfolio6 from'../../assets/portfolio-6.png'
const Works = () => {
  
    return (
    <div>
        <section id="works">
       <h2 className="worktitle" data-aos="fade-up" data-aos-delay="500">
        My Portfolio
       </h2>
       <span className="workDesc" data-aos="fade-up" data-aos-delay="550">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experiences to help businesses achieve their goals and create a strong online presence.
       </span>
       <div className="workimgs">
        <img src={portfolio1} alt="img1" className='workimg' data-aos="fade-right" data-aos-delay="650"/>
        <img src={portfolio2} alt="img2" className='workimg'  data-aos="zoom-in-up" data-aos-delay="650"/>
        <img src={portfolio3} alt="img3" className='workimg'data-aos="fade-left" data-aos-delay="650"/>
        <img src={portfolio4} alt="img4" className='workimg' data-aos="fade-right" data-aos-delay="650"/>
        <img src={portfolio5} alt="img5" className='workimg' data-aos="zoom-in-up" data-aos-delay="650"/>
        <img src={portfolio6} alt="img6" className='workimg'data-aos="fade-left" data-aos-delay="650"/>
       </div>
        <button className="worksbtn" data-aos="fade-up" data-aos-delay="500">See more</button>
            </section>
    </div>
  )
}

export default Works