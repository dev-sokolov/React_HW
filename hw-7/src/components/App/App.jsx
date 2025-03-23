import LanguageProvider from '../../context/LanguageProvider';
import General from '../General/General'

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
