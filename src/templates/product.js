import { graphql } from 'gatsby'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PageContainer, ProductContainer, ProductInfoContainer, ImageContainer, ProductTitle, Price, PriceContainer, PriceCompare, Breadcrumbs, DetailsContainer, Description, ArrowContainer, Arrow } from './productStyles'
import ATCButton from '../components/ATCButton'

const Product = ({ data }) => {
  const { title, currentPrice, compareAtPrice } = data?.contentfulProduct
  const { description } = data?.contentfulProduct?.description
  const { collectionTitle } = data?.contentfulProduct?.collection[0]
  const mainImage = data?.contentfulProduct?.mainImage?.gatsbyImageData
  const [ show, setShow ] = useState(true)

  return (
    <PageContainer>
      <ProductContainer>
        <ImageContainer>
          <GatsbyImage image={getImage(mainImage)} alt={title} />
        </ImageContainer>
      <ProductInfoContainer>
        <Breadcrumbs>Home / {collectionTitle} / {title}</Breadcrumbs>
        <ProductTitle>{title}</ProductTitle>
        <PriceContainer>
          <Price>{"$" + currentPrice}</Price>
          {compareAtPrice !== currentPrice ? (<PriceCompare>{"$" + compareAtPrice}</PriceCompare>) : null}
        </PriceContainer>
        <ATCButton />
        <DetailsContainer>
          <Description>
            <span>DESCRIPTION</span>
            <ArrowContainer>
              <Arrow onClick={()=> setShow(!show)}></Arrow>
            </ArrowContainer>
          </Description>
          {show && <ReactMarkdown>{description}</ReactMarkdown>}
        </DetailsContainer>
      </ProductInfoContainer>
      </ProductContainer>
    </PageContainer>
  )
}

export const query = graphql`
query MyQuery($slug: String) {
  contentfulProduct(slug: {eq: $slug}) {
    description {
      description
    }
    title
    currentPrice
    compareAtPrice
    mainImage {
      gatsbyImageData(layout: CONSTRAINED, width: 550)
    }
    collection {
      slug
      collectionTitle
    }
  }
}
`
export default Product