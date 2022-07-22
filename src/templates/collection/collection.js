import React from 'react'
import { graphql } from 'gatsby'
import ProductPreview from '../../components/ProductPreview.js'
import { CollectionContainer, ProductsContainer, PreviewContainer, CollectionTitleWrapper } from './collectionStyles.js'


function collection({ data }) {
  const { collectionTitle } = data?.contentfulCollection

    console.log(data)
  return (
    <CollectionContainer>
    <CollectionTitleWrapper>{collectionTitle}</CollectionTitleWrapper>
      <ProductsContainer>
        <PreviewContainer>
          <ProductPreview data={data}/>
        </PreviewContainer>
      </ProductsContainer>
    </CollectionContainer>
  )
}

export const query = graphql`
query CollectionQuery($collectionSlug: String) {
    contentfulCollection(slug: {eq: $collectionSlug}) {
      collectionTitle
      products {
        title
        currentPrice
        mainImage {
          gatsbyImageData(width: 250)
        }
      }
    }
  }
  
`
export default collection