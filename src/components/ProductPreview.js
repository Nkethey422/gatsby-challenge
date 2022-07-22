import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PreviewImg, PreviewPrice, PreviewTitle, PreviewInfoContainer } from '../templates/collection/collectionStyles'

function ProductPreview({ data }) {
  return (
    <>
    {data?.contentfulCollection.products.map(product => {
        return (
          <PreviewImg>
            <GatsbyImage image={getImage(product?.mainImage?.gatsbyImageData)} alt={product.title} />
            <PreviewInfoContainer>
                <PreviewTitle>
                    {product.title}
                </PreviewTitle>
                <PreviewPrice>${product.currentPrice}</PreviewPrice>
            </PreviewInfoContainer>
          </PreviewImg>
        )
      })}
  </>
  )
}

export default ProductPreview 