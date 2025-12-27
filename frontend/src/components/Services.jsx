import { useContext } from "react";
import { ServiceContext } from "../contexts/ServiceContext";

function Services() {
  const { servicesLista, loading } = useContext(ServiceContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="Service-lista">
      {servicesLista.map((item) => (
        <div key={item.id} className="Service">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img src={item.photo} alt= {item.title} width="400" height="250"></img>
        </div>
      ))}
    </div>
  );
}


export default Services;
