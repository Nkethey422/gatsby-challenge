import React from 'react'
import { AtcContainer, AtcButton, Promo } from '../templates/ATCStyles'

const ATCButton = () => {
  return (
    <AtcContainer>
          <AtcButton>ADD TO CART</AtcButton>
          <Promo>Free shipping on orders over $50. Free returns</Promo>
    </AtcContainer>
  )
}

export default ATCButton