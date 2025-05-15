const Foto = ({ source, width, height, border }) => {
    return (
        <div className="foto">
            <img
                src={source}
                alt="Foto"
                style={{
                    width: width,
                    height: height,
                    borderRadius: border,
                    boxShadow: '0px 0px 1000px 220px cyan',
                    opacity: '1',
                    filter: 'blur(100px)',
                    position: 'absolute',
                    top: '-300px',
                    right: '-300px',
                }}
            />
        </div>
    );
}

export default Foto;
