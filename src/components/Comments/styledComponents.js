import styled from 'styled-components'

export const MainCon=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    @media screen and (max-width:576px){
        padding:20px;
    }
`
  
export const Container=styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    @media screen and (max-width: 576px) {
      flex-direction: column;
    }
`
  
export const Form=styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width:576px){
      order: 1;
    }
`

export const ImgCon=styled.div`
  @media screen and (max-width: 576px) {
      order: 0;
    }
`

  
  
export const Head=styled.h1`
    color: #1e293b;
    font-size: 30px;
    font-weight: bold;
`
  
export const Para=styled.p`
    color: #475569;
    font-size: 20px;
    font-weight: 500;
`
  
export const Input=styled.input`
    background-color: transparent;
    border: 1px solid #cbd2d9;
    outline: none;
    padding: 10px;
    margin: 5px;
    border-radius: 2px;
`
  
export const Textarea=styled.textarea`
    background-color: transparent;
    border: 1px solid #cbd2d9;
    outline: none;
    padding: 10px;
    margin: 5px;
    border-radius: 2px;
`
  
export const Submit=styled.button`
    background-color: #0284c7;
    padding: 8px;
    color: white;
    margin: 5px;
    width: 120px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
  
export const Hr=styled.hr`
    color: #cbd2d9;
    width: 100%;
`
  
export const Comment=styled.p`
    color: #334155;
`
  
export const Span=styled.span`
    background-color: #0284c7;
    color: white;
    padding: 8px;
`

export const Img=styled.img`
    margin:1px;
    @media screen and (max-width:576px){
        width:80vw;
    }
`

export const Ul=styled.ul`
    list-style-type: none;
    padding-left:0px;
`