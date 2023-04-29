import { useState } from "react";
import { useLocation } from "react-router-dom";

import { AppContainer, AboutAndEmail, EmailContainer } from "./App.styles";

import netflixBg from "./assets/images/netflix-bg.jpg";
import WelcomeHeader from "./components/welcome-header/welcome-header.component";

const App = () => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");

  return (
    <AppContainer bgUrl={netflixBg}>
      <WelcomeHeader />
      {pathname === "/" ? (
        <AboutAndEmail>
          <section className="context">
            <h1>Unlimited movies, TV shows and more</h1>
            <div className="subtitles">
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h2>
                Ready to watch? Enter your email to create or restart your
                membership
              </h2>
            </div>

            <EmailContainer emailVal={email}>
              <div>
                <input
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h3>Enter your Email</h3>
              </div>
              <button>Get Started</button>
            </EmailContainer>
          </section>
        </AboutAndEmail>
      ) : null}
    </AppContainer>
  );
};

export default App;
