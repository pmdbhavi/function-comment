import CommentsItem from '../CommentsItem'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {MainCon,Head,Container,Form,Para,Input,Textarea,Submit,ImgCon,Img,Hr,Comment,Span,Ul} from './styledComponents'

const Comments=()=>{
    const [list,setList]=useState([])
    const [name,setName]=useState('')
    const [comment,setComment]=useState('')

    const onChangeName=(event)=>{
        setName(event.target.value)
    }

    const onChangeComment=(event)=>{
        setComment(event.target.value)
    }

    const isToggle = id => {
        setList(prevState => 
          prevState.map(each => {
            if (id === each.id) {
              return {...each, isLike: !each.isLike}
            }
            return each
          }),
        )
      }

    const addComment=(event)=>{
        event.preventDefault()
        if (name.length!==0 && comment.length!==0){
        const newComment={
            id:uuidv4(),
            name,
            comment,
            isLike:false,
            date:new Date(),
        }
        setList(prevState=>[...prevState,newComment])
        setName('')
        setComment('')
    }
    else{
        alert("Please enter the valid Details")
    }
    }

    const onDelete=(id)=>{
        setList(list.filter(each=>each.id!==id))
    }

    return(
        <MainCon>
            <Head>Comments</Head>
            <Container>
                <Form onSubmit={addComment}>
                    <Para>Say something about 4.0 Technologies</Para>
                    <Input placeholder="Your Name" type="text" value={name} onChange={onChangeName}/>
                    <Textarea placeholder="Your Comments" rows="5" cols="50"  value={comment} onChange={onChangeComment} />
                    <Submit type="submit">Add Contacts</Submit>
                </Form>
                <ImgCon>
                    <Img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments"/>
                </ImgCon>
            </Container>
            <Hr/>
            <Comment>
                <Span>{list.length}</Span> Comments
            </Comment>
            <Ul>
                {list.map(each=>(
                    <CommentsItem details={each} key={each.id} isLiked={isToggle} isDelete={onDelete}/>
                ))}
            </Ul>
        </MainCon>
    )
}

export default Comments