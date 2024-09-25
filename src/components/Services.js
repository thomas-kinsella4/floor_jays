import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import floorimg1 from "../assets/floorimg1.png"
import sales from "../assets/services-sales.jpg"
import carpet from "../assets/services-carpet.jpg"
import runner from "../assets/services-runner.webp"
import hardwood from "../assets/services-hardwood.jpg"
import vinyl from "../assets/services-vinyl.jpg"
import lino from "../assets/services-lino.avif"
import ceramic from "../assets/services-ceramic.jpg"
import level from "../assets/services-level.jpg"
import subfloor from "../assets/services-subfloor.jpg"
import repair from "../assets/services-repair.jpg"
import floorimg2 from "../assets/floorimg2.png"
import floorimg3 from "../assets/floorimg3.png"
import floorimg4 from "../assets/floorimg4.png"
import AOS from 'aos';

const Services = () => {

    AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

  return (
    <>
    <a className='anchor' id='services-section'></a>
    <div className='content' id='services-content'>
        <div className='wrapper' id='service-wrapper'>
        <div className='content' id='process-content'>
            <div id="about-us">
            <h1>Who We Are At <p id="about-logo">Floor Jays</p></h1>
            <p>Welcome to Floor Jays! We’re a small, family-owned business with over 30 years of
                experience in the flooring industry. Specializing in the installation of all types of floor
                coverings, our mission is to provide you with a seamless, hassle-free experience from
                start to finish. From guiding you through the selection process to ensuring top-notch
                installation, we’re dedicated to delivering quality and satisfaction every step of the way.
                Trust Floor Jays to transform your space with care and expertise.</p>
            </div>
            <div data-aos="fade-left" className="process-card-left">
                    <div className="inner-process-card">
                        <p>
                        <h2 className='service-title'>Sales</h2>
                        At Floor Jays, we specialize in the sales of a wide range of floor coverings to suit
                        every style and need. Whether you're looking for cozy carpet, elegant wood, durable
                        luxury vinyl plank, sleek ceramic tile, or more, we’ve got you covered!
                        Explore our diverse selection and find the perfect flooring to elevate your home.</p>
                        <img src={sales} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-right" className="process-card-right">
                    <div className="inner-process-card-right">
                    <p>
                        <h2 className='service-title'>Carpet</h2>
                        Carpet installation comes in several methods, each suited to different needs and
                        preferences. Stretch-In Installation involves stretching the carpet over a cushioned pad
                        and securing it with tack strips, providing a smooth, snug fit ideal for residential spaces.
                        Glue-Down Installation adheres the carpet directly to the subfloor using adhesive,
                        making it perfect for high-traffic areas or commercial settings due to its stability. Double-
                        Stick Installation combines a layer of adhesive between the carpet and the underlay,
                        offering added comfort and durability. Carpet Tiles are modular and easy to replace,
                        allowing for creative patterns and quick fixes. Each method ensures a tailored solution to
                        enhance the comfort and style of your space.</p>
                        <img src={carpet} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-left" className="process-card-left">
                    <div className="inner-process-card">
                        <p>
                        <h2 className='service-title'>Area Rugs/Runners</h2>
                        Custom binding is a versatile solution for adding a personalized touch to your flooring projects, offering tailored options for stair runners, area rugs, and on-site binding. Stair runners are custom-bound to fit the exact dimensions of your stairs, providing both safety and a stylish, cohesive look. Area rugs are crafted to your specifications, with custom binding edges that enhance durability and complement your décor. On-site binding allows for the creation of bespoke rugs or runners directly at your location, accommodating unique sizes and shapes while ensuring a perfect fit. This personalized approach not only enhances the aesthetic appeal of your space but also ensures that every detail aligns with your vision.</p>
                        <img src={runner} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-right" className="process-card-right">
                    <div className="inner-process-card-right">
                    <p>
                        <h2 className='service-title'>Hardwood</h2>
                        Hardwood installation, staining, and sanding are key steps in achieving a beautiful,
                        enduring floor. Installation involves carefully laying down hardwood planks to ensure a
                        precise fit and finish. Sanding follows, smoothing the wood’s surface to remove
                        imperfections and prepare it for finishing. Staining then enhances the natural grain and
                        color of the wood, allowing you to customize the look to suit your décor. This
                        comprehensive process not only brings out the beauty of hardwood but also adds a
                        protective layer, ensuring your floor remains stunning and resilient for years to come.</p>
                        <img src={hardwood} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-left" className="process-card-left">
                    <div className="inner-process-card"> 
                    <p>
                        <h2 className='service-title'>Laminate, Luxury Vinyl Plank, Waterproof Flooring</h2>
                        1. Laminate Flooring Installation:
                       Glue-Down: This method uses adhesive to secure the laminate to the subfloor,
                        ensuring a sturdy and seamless finish. Ideal for high-traffic areas, it offers
                        excellent durability and resistance to shifting.
                       Click Installation: Featuring a convenient locking system, click installation
                        allows for quick and easy assembly without the need for glue. Perfect for DIY
                        enthusiasts and those looking for a fast, mess-free solution.
                        2. Vinyl Flooring Installation:
                         Glue-Down: Vinyl is adhered directly to the subfloor using strong adhesive,
                        providing a stable and long-lasting surface. This method is great for areas with
                        heavy use or where a smooth, seamless look is desired.
                         Click Installation: Similar to laminate, vinyl click installation uses a locking
                        mechanism for easy, glue-free assembly. It’s perfect for a hassle-free upgrade
                        and is suitable for most residential spaces.</p>
                        <img src={vinyl} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-right" className="process-card-right">
                    <div className="inner-process-card-right">
                    <p>
                        <h2 className='service-title'>Linoleum, Sheet Vinyl</h2>
                        Linoleum Flooring: Made from natural materials like linseed oil, cork dust, and
                        wood flour, linoleum is an eco-friendly flooring option known for its durability and low
                        maintenance. It offers a wide range of colors and patterns, making it a versatile choice
                        for both residential and commercial spaces. Linoleum is also naturally antibacterial and
                        resistant to wear and tear, making it an excellent choice for high-traffic areas.
                        Sheet Vinyl Flooring: Sheet vinyl is a flexible, water-resistant option that comes in
                        large, continuous rolls, reducing seams and potential for leaks. Available in a variety of
                        designs, from realistic wood and stone looks to vibrant patterns, sheet vinyl is both
                        stylish and practical. It's ideal for kitchens, bathrooms, and other areas prone to
                        moisture, offering a comfortable underfoot feel and easy maintenance.
                        Both options provide a blend of style and functionality, ensuring a durable and attractive
                        flooring solution for your home or business.</p>
                        <img src={lino} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-left" className="process-card-left">
                    <div className="inner-process-card"> 
                    <p>
                        <h2 className='service-title'>Ceramic Tile</h2>
                       Tile installation transforms your space with a touch of elegance and durability.
                        Whether you're opting for classic ceramic, sleek porcelain, or trendy mosaic tiles, our
                        expert team ensures a flawless installation. We handle everything from precise
                        measurement and layout to careful grouting and sealing, delivering a floor that not only
                        enhances your home’s aesthetic but also stands up to everyday wear. With tile flooring,
                        you get a stylish, low-maintenance solution that’s built to last and perfect for any room in
                        your home.</p>
                        <img src={ceramic} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-right" className="process-card-right">
                    <div className="inner-process-card-right">
                    <p>
                        <h2 className='service-title'>Mudding/Self Leveling</h2>
                        Leveling and mudding floors are crucial steps in preparing a surface for new
                        flooring. Leveling involves smoothing out any uneven areas of the subfloor to ensure a
                        flat, stable foundation, which helps prevent issues like uneven wear or movement in the
                        final floor covering. Mudding refers to applying a leveling compound or cement-based
                        mix to fill in low spots, cracks, or gaps, creating a uniform surface. Together, these
                        processes ensure a professional, long-lasting finish by addressing imperfections and
                        enhancing the overall durability and appearance of the new flooring installation.</p>
                        <img src={level} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-left" className="process-card-left">
                    <div className="inner-process-card">
                        <p>
                        <h2 className='service-title'>New Subfloor</h2>
                        New subfloor installation is a foundational step in any flooring project, ensuring a stable
                        and smooth base for your final floor covering. The process involves removing the old
                        subfloor, if necessary, and installing new sheets or planks of material—typically plywood
                        or oriented strand board (OSB)—to create a solid, level foundation. Proper subfloor
                        installation is essential for preventing issues such as creaking, sagging, or unevenness
                        in the finished floor. It also helps to support the integrity of the flooring system,
                        enhancing overall durability and longevity. By addressing subfloor needs meticulously,
                        you ensure that your new flooring will perform and look its best for years to come.</p>
                        <img src={subfloor} className="service-img"></img>
                    </div>
                </div>
                <div data-aos="fade-right" className="process-card-right">
                    <div className="inner-process-card-right">
                    <p>
                        <h2 className='service-title'>Repairs</h2>
                        Carpet and flooring repairs are essential for maintaining the appearance and
                        functionality of your floors. Whether you're dealing with unsightly stains, torn carpet,
                        damaged planks, or cracked tiles, prompt repairs can prevent further issues and extend
                        the life of your flooring. Skilled repair services address problems like patching damaged
                        areas, re-stretching carpets, or replacing broken tiles and planks. By tackling repairs
                        quickly, you restore the beauty and integrity of your floors, ensuring a safe, seamless,
                        and visually appealing surface for years to come.</p>
                        <img src={repair} className="service-img"></img>
                    </div>
                </div>
           
            </div>
            {/* <div    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
            <div id="service-card-container">
                <div className="service-card">
                    <div className="inner-service-card">
                    <h2 className="service-card-title">LVP - Luxury Vinyl Plank</h2>
                    <img src={floorimg1} className="services-pic"></img>
                    <p className="service-card-text">Luxury vinyl plank is a great product for families and people with active lifestyles. It is great for young kids and pets alike. It's scratch resistant and durable and you can spill on it so there is no harm, no foul.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="inner-service-card">
                    <h2 className="service-card-title">Laminate</h2>
                    <img src={floorimg3} className="services-pic"></img>
                    <p className="service-card-text">Laminate floors are super durable and scratch resistant. They're great for people that have gotten past the stage of kids and puppies. A lot of the laminate companies say that their product is waterproof when it's not.
                    The core of a laminate product is a compressed fiberboard. When a compressed fiberboard gets wet, it swells, and never goes back to normal.</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="inner-service-card">
                    <h2 className="service-card-title">Carpet</h2>
                    <img src={floorimg2} className="services-pic"></img>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className="service-card">
                    <div className="inner-service-card">
                    <h2 className="service-card-title">Ceramic Tile</h2>
                    <img src={floorimg4} className="services-pic"></img>
                    <p className="service-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Services