const Maps = () => {
  // bach t changer l'adresse => https://www.maps.ie/create-google-map/
  return (
    <div className="map-section">
      <div className="gmap-frame" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          width="800"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20%20Nouaceur%20+(adf%20emballage)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
export default Maps;