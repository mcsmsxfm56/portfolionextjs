import { Carousel } from "react-responsive-carousel";
import { items } from "../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ResponsiveCarousel() {
  const { responsive } = items;
  const { locale } = useRouter();
  return (
    <div className="ml-6 mr-6">
      <Carousel
        showArrows={false}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        className="carousel"
      >
        {responsive.map((item) => (
          <div key={item.id}>
            <div>
              <Image
                src={item.imageUrl}
                height={527} // Desired size with correct aspect ratio
                width={1268} // Desired size with correct aspect ratio
                alt="Slider"
              />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p className="mb-9">
                {locale == "en-US" ? item.text : item.textspanish}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
