let Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center"> Seguimiento Pacientes </h2>
            <p className="text-lg mt-5 text-center">Añade pacientes y {" "}</p>
            <span className="text-indigo-600 font-bold">Administralos</span>
            <form className="bg-white shadow-md rounded-lg py-10 px-5">
                <div>
                    <label className="block"> Nombre mascota </label>
                    <input type="text" placeholder="Nombre de la mascota"/>
                </div>
            </form>
        </div>
        )
}

export default Formulario;