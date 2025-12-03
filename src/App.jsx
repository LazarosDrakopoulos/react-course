import ReactImg from './assets/react-core-concepts.png';
import Header from './components/Header.jsx';
import componentsImg from './assets/components.png';
import CoreConcept from './components/CoreConcept.jsx'


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
         <h2>Core concept</h2>
<ul>
<CoreConcept 
title = "components"
description = "the core ui"
image = {componentsImg}

/>
<CoreConcept />
<CoreConcept />
<CoreConcept />
</ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;