function DetailRow(props: { label: string; value: string }) {
    return (
        <p><strong>{props.label}:</strong> {props.value}</p>
    );
}

export default DetailRow;