import {CommentsList,Con1,Initial,Name,Time,Comment,Con2,Button,Img,Delete,DeleteImg,Like} from './styledComponents'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, isLiked,isDelete} = props
  const {id, name, comment, isLike,date} = details
  const time = formatDistanceToNow(date)
  const isToggled = () => {
    isLiked(id)
  }

  const onDeleted=()=>{
    isDelete(id)
  }

  return (
    <CommentsList>
      <Con1>
        <Initial>{name[0].toUpperCase()}</Initial>
        <Name>{name}</Name>
        <Time>{time} ago</Time>
      </Con1>
      <Comment>{comment}</Comment>
      <Con2>
        <Button type="button" onClick={isToggled}>
          <Img
            src={
              !isLike
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
            }
            alt="like"
          />
          <Like active={!isLike}>Like</Like>
        </Button>
        <Delete
          type="button"
          onClick={onDeleted}
          data-testid="delete"
        >
          <DeleteImg
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </Delete>
      </Con2>
    </CommentsList>
  )
}

export default CommentItem
