import { useState, useEffect } from 'react';
import '../styles/app.scss';
import Header from './Header';
import Body from './Body';

function App() {
    const [isChecked, setIsChecked] = useState(false);

    let articles = document.querySelectorAll('article');
    let navLinks = document.querySelectorAll('header nav ul li a');  
  
    const selectMenuOnScroll = () => {
      articles.forEach(article => {
          let top = window.scrollY;
          let offset = article.offsetTop;
          let height = article.offsetHeight;
          console.log('offset ', offset)
          let id = article.getAttribute('id');
          if(top >= offset && top < offset + height) {
              navLinks.forEach(links => {
                  links.classList.remove('active');
                  document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
              });
          };
      });
    }

    useEffect(() => {
      window.addEventListener("scroll", selectMenuOnScroll);

      return () => {
        window.addEventListener("scroll", selectMenuOnScroll);
      };
    }, [])
    
    const updateCheckBox = () => {
      setIsChecked(!isChecked)
    }

    return (
      <div className="app">
        <Header updateCheckBox={updateCheckBox} />
        <Body isChecked={isChecked} />
      </div>
    );
}

export default App;
