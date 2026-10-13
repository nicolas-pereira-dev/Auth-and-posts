import { useEffect, useState } from "react";
import { Post } from "../models/post";
import { ModalInfo } from "../models/ModalInfo";

function usePosts(getPost: (userId: number) => Promise<Post[]>, userId: number) {
    const [postList, setPostList] = useState<Post[]>([]);
    const [infoModal, setInfoModal] = useState<ModalInfo | null>(null);

    const handleCloseModal = () => setInfoModal(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setInfoModal(null);
                setPostList (await getPost(userId));
            } catch (error) {
                const infoModalState: ModalInfo = {
                    title: 'Fetch post failed.',
                    description: JSON.stringify(error),
                    level: 'error'
                };
                setInfoModal(infoModalState);
            }
        }
        fetchPost();
    }, [getPost, userId]);

    return { postList, infoModal, handleCloseModal };
}

export default usePosts;