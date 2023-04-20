import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home';

import { useKeenSlider } from 'keen-slider/react' 

import camisa1 from '../assets/camisetas/camisa1.png'
import camisa2 from '../assets/camisetas/camisa2.png'
import camisa3 from '../assets/camisetas/camisa3.png'

export default function Home() {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className='keen-slider__slide'>
        <Image src={camisa1} width={520} height={480} alt=''/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camisa1} width={520} height={480} alt=''/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camisa2} width={520} height={480} alt=''/>

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={camisa3} width={520} height={480} alt=''/>

        <footer>
          <strong>Camiseta 3</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
     
    </HomeContainer>
  )
}
