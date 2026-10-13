import './message-post-list.css';
import { useEffect, useState } from "react";
import { Post } from "../../models/post";
import Loader from "../loader/loader";
import MessagePost from "../message-post/message-post";
import Modal from "../modal/modal";


function MessagePostList(props: {
    posts: Post[] | undefined,
    isLoading: boolean,
    error: Error | null,
    isError: boolean
}) {
    const infoModal =  props.error ? {
        title: 'Fetch post failed.',
        description: props.error.message,
        level: 'error'
    } : null;

    const [showModal, setShowModal] = useState(props.error == null);

    useEffect(() => setShowModal(props.error != null), [props.error]);

    return (<div className="message-post-list">
        <div className='post-found-text'>
            { props.posts && <span>{props.posts.length} posts found!</span> }
        </div>
        {  
            props.isLoading ? <Loader /> :
            props.posts && props.posts.map(post => (
                <MessagePost
                    key={post.id}
                    title={post.title}
                    content={post.content}
                />
            ))
        }
        {
            props.isError &&
            showModal &&
            infoModal &&
            <Modal handleClose={() => setShowModal(false)} info={infoModal}/>
        }
    </div>);
}

export default MessagePostList;