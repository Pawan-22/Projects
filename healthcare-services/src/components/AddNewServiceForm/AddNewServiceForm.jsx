import "./AddNewServiceForm.css";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddServiceForm = ({ onAdd, onCancel, existingServices }) => {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    description: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const codeExists = existingServices.some(
      (service) => service.code === formData.code
    );
    if (codeExists) {
      toast.error("Service code already exists!");
      return;
    }

    onAdd(formData);

    toast.success("Service added successfully!");

    setFormData({ code: "", name: "", description: "", price: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="add-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Service</h2>
        <div>
          <label>Service Code:</label>
          <input
            type="number"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
          />
        </div>
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
        <div>
          <button type="submit">Add Service</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;
