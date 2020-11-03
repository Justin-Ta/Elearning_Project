import React, { useState, createElement } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { LikeOutlined, LikeFilled } from '@ant-design/icons';

export default function COMMENT () {
    const [likes, setLikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setAction('liked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <div onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className="comment-action" >{likes}</span>
          </div>
        </Tooltip>,
      ];

    return (
        <Comment
            actions={actions}
            author={<p>Han Solo</p>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                    and efficiently.
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    );
}
