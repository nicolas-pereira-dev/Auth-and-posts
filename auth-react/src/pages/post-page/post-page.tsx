import { Post } from "../../models/post";
import { useQuery } from "@tanstack/react-query";
import MessagePostList from "../../components/message-post-list/message-post-list";

function PostPage(props: { getPostById: (puserId: number) => Promise<Post[]>, userId: number}) {
    // const { postList, infoModal, handleCloseModal } = usePosts(props.getPostById, props.userId);
    const { data: posts, isLoading, error, isError } = useQuery({
            queryKey: ['posts', props.userId], 
            queryFn : () => props.getPostById(props.userId),
        });
    
    return (<MessagePostList posts={posts} error={error} isLoading={isLoading} isError={isError} />);
}

export default PostPage;