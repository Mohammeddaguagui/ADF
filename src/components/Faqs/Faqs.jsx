import Slider from "react-slick";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const settings = {
  dots: false,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};
const TestimonialData = [
  {
    id: 1,
    name: "Mohamed",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Fatimazahra",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "daguagui",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];
const Faqs = () => {
  return (
    <>
      <div className="min-h-[550px] ">
        <div className="container">

          <HeaderTitle
            title="Ce que disent nos clients"
            subtitle="Faqs"

            description={
              "Notre équipe de développement logiciel collabore étroitement avec chaque client pour comprendre leurs besoins spécifiques, garantissant ainsi des solutions sur mesure qui répondent précisément à leurs exigences"
            }
          />

          <div className="max-w-[600px] mx-auto">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div data-aos="fade-up" key={data.id}>
                  <div className="text-center shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5">
                    <img
                      className="rounded-full block mx-auto"
                      src={data.img} />
                    <p className="text-gray-500 text-sm">{data.testimonial}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                  </div>
                  <br /><br />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
