import { useState } from "react";
import { HEALTHCARE_SERVICES } from "../../healthcare_services";
import ServiceCard from "../ServiceCard/ServiceCard";
import AddServiceForm from "../AddNewServiceForm/AddNewServiceForm";
import EditServiceForm from "../EditServiceForm/EditServiceForm";
import "./ServiceListing.css";

const ServiceListing = () => {
  const [services, setServices] = useState(HEALTHCARE_SERVICES);
  const [isAdding, setIsAdding] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const handleDeleteService = (id) => {
    const updatedServices = services.filter((service) => service.code !== id);
    setServices(updatedServices);
  };

  const handleAddService = (newService) => {
    setServices((prevServices) => [...prevServices, newService]);
    setIsAdding(false);
  };

  const handleEditService = (updatedService) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.code === updatedService.code ? updatedService : service
      )
    );
    setEditingService(null);
  };

  return (
    <div>
      {isAdding ? (
        <AddServiceForm
          onAdd={handleAddService}
          onCancel={() => setIsAdding(false)}
          existingServices={services}
        />
      ) : editingService ? (
        <EditServiceForm
          service={editingService}
          onSave={handleEditService}
          onCancel={() => setEditingService(null)}
        />
      ) : (
        <>
          <div className="service-listing">
            {services.map((service) => (
              <ServiceCard
                key={service.code}
                name={service.name}
                description={service.description}
                price={service.price}
                onEdit={() => setEditingService(service)}
                onDelete={() => handleDeleteService(service.code)}
              />
            ))}
          </div>
          <div className="add-service-button">
            <button onClick={() => setIsAdding(true)}>Add New Service</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceListing;
