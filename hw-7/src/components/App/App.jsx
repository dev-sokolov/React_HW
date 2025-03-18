import LanguageProvider from '../../context/LanguageProvider';
import General from '../General/General'

import './App.css'

function App() {

  return (
    <>
      <LanguageProvider>
        <General />
      </LanguageProvider>
    </>
  )
}

export default App
