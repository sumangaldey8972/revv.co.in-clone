import Carousel from "react-bootstrap/Carousel";

function CarouselComponents() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-10"
          width="425"
          height="261.19"
          src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          width="425"
          height="261.19"
          src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-10"
          width="425"
          height="261.19"
          src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponents;
