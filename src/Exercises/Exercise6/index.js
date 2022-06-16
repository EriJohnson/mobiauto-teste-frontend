import React, { Fragment, useEffect, useState, useCallback } from 'react';
import 'h8k-components';

import { image1, image2, image3, image4 } from './assets/images';
import { Thumbs, Viewer } from './components';

const title = 'Catalog Viewer';

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(false);
  const [slideDuration] = useState(3000);

  function handleInputChange() {
    setSlideTimer(!slideTimer);
  }

  function handleThumbClick(index) {
    setActiveIndex(index);
  }

  function goBack() {
    // Caso tenha chegado no começo da lista de imagem, retorna para o final
    if (activeIndex === 0) {
      return setActiveIndex(catalogsList.length - 1);
    }

    return setActiveIndex(prevActiveIndex => prevActiveIndex - 1);
  }

  const goNext = useCallback(() => {
    // Caso tenha chegado ao final da lista de imagem, retorna para o começo
    if (activeIndex >= catalogsList.length - 1) {
      return setActiveIndex(0);
    }

    setActiveIndex(prevActiveIndex => prevActiveIndex + 1);
  }, [activeIndex, catalogsList.length]);

  useEffect(() => {
    const slide = setInterval(() => {
      if (slideTimer) {
        goNext();
      }
    }, slideDuration);

    return () => clearInterval(slide);
  }, [goNext, slideDuration, slideTimer]);

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className='layout-row justify-content-center align-items-center mt-20'>
              <button
                className='icon-only outlined'
                data-testid='prev-slide-btn'
                onClick={goBack}
              >
                <i className='material-icons'>arrow_back</i>
              </button>
              <Thumbs
                items={catalogs}
                currentIndex={activeIndex}
                onClick={handleThumbClick}
              />
              <button
                className='icon-only outlined'
                data-testid='next-slide-btn'
                onClick={goNext}
              >
                <i className='material-icons'>arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input
            type='checkbox'
            data-testid='toggle-slide-show-button'
            checked={slideTimer}
            onChange={handleInputChange}
          />
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
