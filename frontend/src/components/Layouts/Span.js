export default function Span({value}) {
    return(
        <>
            <span style={{
                fontStyle: 'italic',
                textDecoration: 'underline',
                cursor: 'pointer',}}
            >
                {value}
            </span>
        </>
    )
}