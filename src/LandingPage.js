const LandingPage = () => {
    const [isAnimated, setIsAnimated] = useState(false);
  
    useEffect(() => {
      setIsAnimated(true);
    }, []);
  
    return (
      <div>
        <CSSTransitionGroup
          in={isAnimated}
          transitionName="landing-page"
          transitionEnterDuration={1000}
          transitionExitDuration={1000}
        >
          <div className="landing-page-container">
            <div className="landing-page-header">
              <h1>Kemp's Digital</h1>
              <h2>IT Consulting</h2>
            </div>
            <div className="landing-page-content">
              <p>
                Kemp's Digital is a leading IT consulting firm that provides innovative solutions to businesses of all sizes. We have a team of experienced professionals who are experts in a variety of technologies, including cloud computing, cybersecurity, and data analytics. We can help you improve your business operations, increase your security, and make better decisions with data.
              </p>
              <button type="button" onClick={() => setIsAnimated(false)}>
                Learn More
              </button>
            </div>
          </div>
        </CSSTransitionGroup>
      </div>
    );
  };
  
  export default LandingPage;