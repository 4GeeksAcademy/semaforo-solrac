export const Circle = ({ color, fondoActual, changeColor }) => {

    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column" onClick={() => changeColor(color)}>
                <div className={`bg-${fondoActual == color ? color : "secondary"} mt-4 mb-4 p-5 rounded-circle`}
                    style={{ height: "180px", width: "180px" }}></div>
            </div>
        </>
    );
};