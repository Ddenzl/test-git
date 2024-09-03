import React, {FC} from 'react';

type CommentProps = {
    author:string;
    date: Date;
}

export const Comment:FC<CommentProps> = (props) => {
    const formatDateFunction = () => {
        return formatDate(props.date)
    }
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date) + 'qwertyu' -2}
        </div>
      </div>
    );
  }