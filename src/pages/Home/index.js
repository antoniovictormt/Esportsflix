import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [inicialData, setInicialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        // eslint-disable-next-line no-console
        console.log(categoriesWithVideos);
        setInicialData(categoriesWithVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {inicialData.length === 0 && (<div>Loading...</div>)}

      {inicialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={inicialData[0].videos[0].title}
                url={inicialData[0].videos[0].url}
                videoDescription={inicialData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={inicialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
