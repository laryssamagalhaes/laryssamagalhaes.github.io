import React from "react";

import Title from "./components/Title";
import Header from "./components/Header";
import Description from "./components/Description";
import Programmer from "./components/Programmer";

function App() {
  return (
    <main>
      <section className="flex-05">
        <Header />
        <div className="descriptionContainer">
          <Title text="Hello, my name is Laryssa." />
          <Description text="I'm a Front end developer and Brazilian. I love working with Javascript also I like going to meetups and contribute to the dev community. 🇧🇷 👩🏼‍💻 👊🏼" />
        </div>
      </section>
      <section className="flex-05">
        <Programmer />
      </section>
    </main>
  );
}

export default App;
