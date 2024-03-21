import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";

import HeaderTitle from "../HeaderTitle/HeaderTitle";
const ServicesData = [
  {
    id: 1,
    img: s1,
    name: "LE PAPIER",
    description:
      "Le papier est acheté dans les plus grandes usines spécialisées présentes sur le marché européen. Tous les types de papier sont certifiés ISO, de pure cellulose et donc indiqués pour le contact avec les aliments.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: s2,
    name: "LA COULEUR",
    description:
      "L’utilisation exclusive d’encres à base d’eau produites par des entreprises certifiées ISO assure la conformité du produit pour l’impression sur des sacs à usage alimentaire",
    aosDelay: "300",
  },
  {
    id: 3,
    img: s3,
    name: "LA COLLE",
    description:
      "La colle est achetée dans la plus importante usine présente sur le marché, leader de son secteur industriel. Elle est produite avec de la fécule de pomme de terre laquelle, mélangée à de l’eau potable, rend le produit indiqué pour l’usage alimentaire.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <div className="min-h-[550px] " id="services">
      <div className="py-12 lg:py-20">
        <div className="container ">
          <HeaderTitle
            title="Vérifiez notre meilleur service"
            subtitle="Nos services"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">

            {ServicesData.map((service) => (
              <div key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-lime-400 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                  />
                </div>
                <br /> <br />
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-slate-500 group-hover:text-black duration-high text-sm line-clamp-8">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
