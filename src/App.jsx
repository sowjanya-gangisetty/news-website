import { useState } from 'react'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Features from './components/Features'
import Categories from './components/Categories'
import SelectedArticle from './components/SelectedArticle'
import SelectedCategory from './components/SelectedCategory'

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <>
      <Header />
      <Navigation updateFunction={setSelectedCategory} setArticle={setSelectedArticle} />
      {selectedArticle
        ? 
    
            <SelectedArticle article={selectedArticle} updateFunction={setSelectedArticle} />
         : selectedCategory
          ? <SelectedCategory category={selectedCategory} updateFunction={setSelectedArticle} />
          : <>
              <Features updateFunction={setSelectedArticle} />
              <Categories updateFunction={setSelectedArticle} />
            </>
      }
    </>
  )
}

export default App
