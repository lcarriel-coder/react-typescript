import { useForm } from "../hooks/useForm";

interface FormData {
  email:string;
  nombre:string;
  edad:number
}
export const Formulario = () => {
  
  const { nombre, email,edad, handleChange,formulario } = useForm<FormData>({
    email: "fernando@gmail.com",
    nombre: "Fernando Herrera",
    edad:35
  });


  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="text"
          name="nombre"
          className="form-control"
          value={nombre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input
          type="number"
          name="edad"
          className="form-control"
          value={edad}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(formulario )}</pre>
    </form>
  );
};
