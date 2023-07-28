export default function Button({value}) {
    return (
        <>
            <button
                style={{
                    padding: '5px 8px',
                    backgroundColor: 'blue',
                    color: 'white',
                    fontWeight: 600,
                    border: 'none',
                    borderRadius: '5px',
                    marginBottom: '10px',
                  }}
                  className="btn btn-primary"
                  >
                    {value}
                  </button>
        </>
    )
}