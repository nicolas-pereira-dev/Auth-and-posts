import './submit-button.css';

function SubmitButton(props: { label: string, onClick: () => void, disabled?:boolean}) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.onClick();
    };
    return (
        <button 
            className="submit-button" 
            onClick={handleClick}
            disabled={props.disabled}>
            {props.label}
        </button>
    );
}

export default SubmitButton;