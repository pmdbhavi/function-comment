import styled from 'styled-components'

export const CommentsList=styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left:0px;
`
export const Con1=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Initial=styled.p`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color:green;
`

export const Name=styled.p`
  margin: 10px;
  font-weight: bold;
  color: #334155;
`

export const Time=styled.p`
  color: #94a3b8;
`

export const Comment=styled.p`
  color: #64748b;
  margin-left: 20px;
`

export const Con2=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Button=styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const Like=styled.p`
  margin-left: 5px;
  font-weight: bold;
  color: #7e858e;
  color:${props=>props.active?"#7e858e":"#0ea5e9"};
`
export const Delete=styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const DeleteImg=styled.img`
  margin:1px;
`

export const Img=styled.img`
  margin:2px;
`