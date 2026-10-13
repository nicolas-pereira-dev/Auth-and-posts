import { memo } from 'react';
import './message-post.css';

function MessagePost( props: { title: string, content: string}) {
    
    console.log('Message post has been re-render.')

    return(
        <div className='message-post'>
            <h3 className='message-post-title'>{props.title}</h3>
            <span className='message-post-content'>{props.content}</span>
        </div>
    );
}

export default memo(MessagePost);