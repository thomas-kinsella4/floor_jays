import Carousel from 'react-bootstrap/Carousel';
import AOS from 'aos';
import fj1 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj1.jpg"
import fj2 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj2.jpg"
import fj3 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj3.jpg"
import fj4 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj4.jpg"
import fj5 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj5.jpg"
import fj6 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj6.jpg"
import fj7 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj7.jpg"
import fj8 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj8.jpg"
import fj9 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj9.jpeg"
import fj10 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj10.png"
import fj11 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj11.jpg"
import fj12 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj12.jpg"
import fj13 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj13.jpg"
import fj14 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj14.jpg"
import fj15 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj15.jpg"
import fj16 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj16.jpg"
import fj17 from "/Users/thomaskinsella/Development2/code/wallyFloors/floorsite2/src/components/styles/fj17.jpg"

function GalleryCards() {
  return (
    <div data-aos="fade-left"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
    <Carousel id="card-shifter" variant="dark">
      <Carousel.Item>
        <div className="gallery-card-section">
        <div className="gallery-card">
            <div className="inner-gallery-card">
                <img className="photo" src={fj1}></img>
            </div>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj2}></img>
            </div>
               
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj3}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj4}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj5}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj6}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj8}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj9}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj10}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj11}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj12}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj13}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj14}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj17}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="gallery-card-section">
            <div className="gallery-card">
            <div className="inner-gallery-card">
            <img className="photo" src={fj16}></img>
            </div>
            </div>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default GalleryCards;