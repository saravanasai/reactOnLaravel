const Home = () => {
    return (
        <>
         <div className="container mt-5">
         <div className="container aos-init aos-animate" data-aos="fade-up">
  <div className="row gy-4">
    <div className="col-lg-3 col-md-6">
      <div className="card count-box p-2">
        <i className="bi bi-emoji-smile" />
        <div>
          <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={0} className="purecounter">232</span>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="card count-box p-2">
        <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}} />
        <div>
          <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={0} className="purecounter">521</span>
          <p>Projects</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="card count-box p-2">
        <i className="bi bi-headset" style={{color: '#15be56'}} />
        <div>
          <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={0} className="purecounter">1463</span>
          <p>Hours Of Support</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <div className="card count-box p-2">
        <i className="fas fa-cat" style={{color: '#bb0852'}} />
        <div>
          <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={0} className="purecounter">15</span>
          <p>Hard Workers</p>
        </div>
      </div>
    </div>
  </div>
</div>
         </div>

        </>
     );
}

export default Home;
