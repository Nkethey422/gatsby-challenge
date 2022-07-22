import styled from 'styled-components'

export const PageContainer = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ProductContainer = styled.div `
    display:flex;
    max-width: 1320px;
    min-width:1300px;
    min-height: 675px;
`

export const ImageContainer = styled.div `
    display: flex;
    align-items: center;
    padding: 1em 2.25em;
`

export const ProductInfoContainer = styled.div `
    width: 50%;
    display:flex;
    flex-direction: column;
    background-color: white;
    padding: 3.5em 1em 0 1em;
`
export const Breadcrumbs = styled.h2 `
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: .25em;
`

export const ProductTitle = styled.h1 `
    margin: 0;
    font-size: 3rem;
    font-weight: 900;
`

export const PriceContainer = styled.div `
    display: flex;
`
export const Price = styled.span `
    font-size: 1.5rem;
    margin: 0 .5em 0 0;
`

export const PriceCompare = styled.span `
    text-decoration: line-through;
    color: grey;
    font-size: 1.5rem;
`
export const DetailsContainer = styled.div `
    width: 100%;
    border-top: 2px solid #D3D4D5;
    border-bottom: 2px solid #D3D4D5;
`
export const Description = styled.div `
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    font-weight: 900;
    letter-spacing:2px;
    margin: 1em 0;
`
export const ArrowContainer = styled.div `
    position: relative;
    height: 1.25rem;
    width: 1.25rem;
`
export const Arrow = styled.div `
    position: absolute;
    height: .75rem;
    width: .75rem;
    border-top: 3px solid black;
    border-left: 3px solid black;
    transform: rotate(45deg);
    left: .15rem;
    top:.4rem;
    cursor:pointer;
`