import './input-text.css';

function InputText(props: {
    label: string, 
    id: string, 
    name:string, 
    type: string, 
    handleChanges: (value: string) => void
}) {
    const handleFieldUpadate = (e: React.ChangeEvent<HTMLInputElement>) => props.handleChanges(e.target.value);

    return (<div className="input-text">
        <label
            className="input-label"
            htmlFor={props.name}>
                {props.label}
        </label>
        <input
            type={props.type}
            id={props.id}
            name={props.name}
            onChange={handleFieldUpadate} />
    </div>);
}
export default InputText;