import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import inicialData from '../../data/inicial_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriesRepository from '../../repositories/categories';

function Home() {
  useEffect(() => {
    categoriesRepository.getAllWithVideos();
  });

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={inicialData.category[0].videos[0].title}
        url={inicialData.category[0].videos[0].url}
        videoDescription={"Video games, since their explosion in arcades in the 70s, instigated the feeling of competition among those who had fun. Competition is something that can help the person's growth and development, making people have ambitions that make them better and, in video games, this is not much different. From that desire, since the 90s, eSports has grown impressively and creating affection and haste for young people."}
      />

      <Carousel
        ignoreFirstVideo
        category={inicialData.category[0]}
      />

      <Carousel
        category={inicialData.category[1]}
      />

      <Carousel
        category={inicialData.category[2]}
      />

      <Carousel
        category={inicialData.category[3]}
      />

      <Carousel
        category={inicialData.category[4]}
      />

      <Carousel
        category={inicialData.category[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
