import { useRouter } from 'next/router';
import { ImageContainer, ProductDetails, ProductsContainer } from '../../styles/pages/product';

export default function Product() {
  const { query } = useRouter()
return (
  <ProductsContainer>
    <ImageContainer>

    </ImageContainer>

    <ProductDetails>
      <h1>Camiseta X</h1>
      <span>R$ 79.90</span>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos optio cupiditate enim quisquam quibusdam impedit deleniti, obcaecati nulla porro, praesentium cumque ut molestias similique expedita dolor asperiores a illo excepturi?</p>

      <button>
        Comprar agora
      </button>
    </ProductDetails>
  </ProductsContainer>
)
}