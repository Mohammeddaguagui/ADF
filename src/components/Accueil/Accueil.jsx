import React from "react";
import l1 from "../../assets/aceuil2.jpg";
import l2 from "../../assets/aceuil3.jpg";
import l3 from "../../assets/aproposv.jpg";
import l4 from "../../assets/aceuil3.jpg";

const ImageList = [
  {
    id: 1,
    img: l1,
  },
  {
    id: 2,
    img: l2,
  },
  {
    id: 3,
    img: l3,
  },
];

const Accueil = () => {
  const [imageId, setImageId] = React.useState(l2);

  const bgImage = {
    backgroundImage: `url(${l4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div className="min-h-screen sm:min-h-[650px] slideInRight bg-gray-100 "style={bgImage} >
        <div className="min-h-screen sm:min-h-[650px] backdrop-blur-md flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <h1
                  data-aos="zoom-out"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                >
                  Welcome to {" "}
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)] "
                    style={{
                      filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255,1))",
                    }}
                  >
                    Adf
                  </span>{" "}
                  Emballage
                </h1>
                <p data-aos="fade-up" className="text-sm ">
                  ADF Emballage est une entreprise Marocaine spécialisée dans la fabrication des sacs en
                  papier à plis multiples pour toutes les contenances et tous les usages.
                </p>
                <div data-aos="fade-up" data-aos-delay="300">
                  <button className="bg-lime-400 to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white">
                    <a href="#services">Plus</a>
                  </button>
                </div>
              </div>
              {/* Image section */}
              <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                <div data-aos="fade-left" data-aos-delay="300">
                  <img
                    src={imageId}
                    className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                  />
                </div>
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[-30px] lg:-right-10 bg-white/30 rounded-full">
                  {ImageList.map((item) => (
                    <div key={item.id} data-aos="zoom-in" data-aos-offset="0">
                      <img

                        src={item.img}
                        onClick={() => {
                          setImageId(
                            item.id === 1
                              ? l1
                              : item.id === 2
                                ? l2
                                : l3
                          );
                        }}
                       
                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
