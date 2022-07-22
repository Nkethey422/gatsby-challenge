import styled from "styled-components";

export const CollectionContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items:center;
`

export const ProductsContainer = styled.div`
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const CollectionTitleWrapper = styled.div`
    width:90%;
    display:flex;
    padding: 2em 0;
    font-size:1.5rem;
    font-weight:900;
`

export const PreviewContainer = styled.div`
    display:grid;
    gap:1rem;
    grid-template-columns:repeat(4,minmax(200px,250px))
`

export const PreviewImg = styled.div`
    display:flex;
    flex-direction:column;
    box-shadow:-5px 5px 10px grey;
`
export const PreviewInfoContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    height:fit-content;
    background-color:darkgrey;
    color:white;
`
export const PreviewTitle = styled.div`
    display:flex;
    height: 2em;
    justify-content:center;
    padding:1em;
    width:100%;
`
export const PreviewPrice = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
    padding:.75em;
`