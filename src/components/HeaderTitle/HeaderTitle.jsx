
import PropTypes from "prop-types";

const HeaderTitle = ({ title, description }) => {
  return (
    <>
      <br /> <br /> <br />
      <div className="text-center mb-20 max-w-[400px] mx-auto">


        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl font-bold"
        >
          {title}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-xs text-gray-400"
        >
          {description}
        </p>
      </div>
    </>
  );
};

HeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeaderTitle; 
