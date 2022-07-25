import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PreviewImg, PreviewPrice, PreviewTitle, PreviewInfoContainer } from '../templates/collection/collectionStyles'
import { Link } from 'gatsby'

function ProductPreview({ data }) {

  console.log(data)

  return (
    <>
    {data?.contentfulCollection.products.map(product => {
        return (
          <PreviewImg>
            <Link to={`/products/${product.slug}`}>
              <GatsbyImage image={getImage(product?.mainImage?.gatsbyImageData)} alt={product.title} />
            </Link>
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