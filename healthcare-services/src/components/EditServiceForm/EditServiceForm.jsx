import { useState, useEffect } from "react";
import "./EditServiceForm.css";

const EditServiceForm = ({ service, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (service) {
      setFormData({
        name: service.name,
        description: service.description,
        price: service.price,
      });
    }
  }, [service]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedService = {
      ...service,
      ...formData,
    };
    onSave(updatedService);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Edit Service</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="edit-form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditServiceForm;
