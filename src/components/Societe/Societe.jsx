import { Link } from "react-router-dom";
import pro from "../../assets/emballagebarita.jpg";


const Societe = () => {
  return (
    <>
      <div className="min-h-[550px]" id="La_société">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div data-aos="flip-up" className="mt-20"> {/* Utilisez mt-4 pour déplacer l'image vers le bas */}
    <img
        src={pro}
        className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
    />
</div>
              
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 ">

                <h2 data-aos="fade-up" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ADF EMBALLAGE AUJOURD’HUI</h2>


                <div data-aos="fade-up" className="mt-6 space-y-6 text-gray-500">
                  <p className="text-lg">

                    ADF Emballage est une entreprise Marocaine spécialisée dans la fabrication des s
                    acs en papier à plis multiples pour toutes les contenances et tous les usages.

                    Forte de l expérience de ses associés, des acteurs importants dans le domaine
                    du papier et de l emballage au Maroc ainsi qu en Europe, mais aussi d une équipe
                    technique très qualifiée et expérimentée, ADF Emballage dispose de tous les outils
                    nécessaires pour le bon développement de son activité, disponibilité régulière de
                    la matière première ainsi qu un bon déroulement de tout le processus
                    productif de l entreprise garantissant une qualité très performante de nos produits.

                    De plus nous disposons d une excellente équipe commercial prête et très
                    motivée pour occuper une part très importante du marché.

                    Tous ces atouts nous permettrons d occuper une position très avantageuse
                    par rapport à tous nos concurrents directs.</p>

                </div>

                <div >
                  <button href="#services" className="bg-lime-400 to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white">
                    <Link to="/Detaille">  plus</Link>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Societe;
