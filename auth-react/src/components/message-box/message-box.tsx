import './message-box.css';

function MessageBox(props: { title: string, description: string, level: string, handleClose: () => void }) {
    return(
        <div className={props.level + '-box message-box'}>
            <button className="close-button" onClick={props.handleClose}>&times;</button>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default MessageBox;