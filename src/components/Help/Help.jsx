import apropos from "../../assets/apropos.jpg";
import { Link } from "react-router-dom";
const Help = () => {
  return (
    <>
      <div className="min-h-[550px] slideInRight" id="Help">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">

              <div data-aos="flip-up">
                <img
                  src={apropos}
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>

              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Help
                </h1>
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  NOUS SOMMES TOUJOURS À VOTRE DISPOSITION POUR N’IMPORTE QUELLE INFORMATION OU ÉCLAIRCISSEMENT

                </h1>
                <p
                  data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5" >
                  ADF EMBALLAGE, qui a un grand respect pour l’environnement, choisit soigneusement les matières premières à utiliser et recycle les déchets de production. Nous achetons des matières premières auprès de fournisseurs qualifiés et certifiés assurant ainsi un produit qui satisfait complètement nos clients et qui reflète le sentiment écologique de l’entreprise.
                  <br /> <br />
                  <button className="p-[2px] relative bounce" >
                    <div className="absolute inset-0 bg-gradient-to-r  from-lime-400 to-lime-200 rounded-lg" />
                    <div className="px-8 py-2   bg-lime-400 hover:text-indigo-800 rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent">
                      <Link to="/Contact">  contactez-nous</Link>
                    </div>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
