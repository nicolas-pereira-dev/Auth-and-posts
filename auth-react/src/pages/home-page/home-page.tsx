import './home-page.css';
import { useQuery } from '@tanstack/react-query';
import getAllPost from '../../services/post-service';
import MessagePostList from '../../components/message-post-list/message-post-list';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Post } from '../../models/post';

function HomePage() {
    const searchInputRef = useRef<HTMLInputElement>(null);

    const { data: posts, error, isLoading, isError } = useQuery({
        queryKey: ['posts'],
        queryFn: () => getAllPost()
    });
    
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const handleFilter = (post: Post) => post.title.includes(debouncedSearch) || post.content.includes(debouncedSearch);
    const filteredPosts =  posts?.filter(handleFilter);
    // const filteredPosts = useMemo(
    //     () => posts?.filter(handleFilter),
    //     [posts, search]
    // );

    useEffect(
        () => {
            const timer = setTimeout(() => setDebouncedSearch(search), 300)
            return () => clearTimeout(timer);
        }, [search]
    );

    useEffect(() => searchInputRef.current?.focus(), []);

    return(
        <div className="home-page">
            <div className='search-div'>
                <input 
                    ref={searchInputRef}
                    className='search-input' 
                    placeholder='Search'
                    type='text' 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <MessagePostList posts={filteredPosts} isLoading={isLoading} error={error} isError={isError} />
        </div>
    );
} 

export default HomePage;