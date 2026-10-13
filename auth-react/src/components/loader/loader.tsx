import './loader.css';

function Loader() {
    return (
        <div className='loader' role='status' aria-live='polite'>
            <span className='loader-spinner' aria-hidden='true' />
            <span>Loading content...</span>
        </div>
    );
}

export default Loader;