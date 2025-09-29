import { useEffect, useCallback, useState } from 'react';
import { getUUID } from './helpers';

interface InputFormProps {
  addResource: () => void;
}

function InputForm(props: InputFormProps) {
  const { addResource } = props;
  const [id, setId] = useState(getUUID());
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);

  const handleId = (e) => {
    // Handle manual override of disabled input
    const numbersOnly = /^[0-9\b]+$/;
    if (
      e.target.value === '' ||
      (numbersOnly.test(e.target.value) && e.target.value.length < 9)
    ) {
      setId(e.target.value);
    }
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleDescription = (e) => {
    // Store form inputs in state
    setDescription(e.target.value);
  };

  const validateForm = useCallback(() => {
    // Minimum conditions for valid form
    if (id.length > 0 && type) {
      setIsValidForm(true);
    }
  }, [id, type]);

  const handleAdd = (e) => {
    e.preventDefault();
    const date = Date.now();
    const newResource = {
      id,
      type,
      description,
      date,
    };
    addResource(newResource);
    // Reset form and state
    setId(getUUID());
    setType('');
    setDescription('');
    setIsValidForm(false);
  };

  useEffect(() => {
    validateForm();
  }, [id, type, description, validateForm]);

  return (
    <form>
      <div>
        <label>
          <div>Resource ID</div>
          <input
            disabled
            type="text"
            onChange={handleId}
            value={`${id}`}
            style={{ width: '250px' }}
            max={8}
          />
        </label>
      </div>
      <div>
        <label>
          <div>Type</div>
          <select value={type} style={{ width: '150px' }} onChange={handleType}>
            <option value="" disabled>
              Choose...
            </option>
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
            <option value="Phone">Phone</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          <div>Description</div>
          <input
            value={description}
            maxLength={200}
            onChange={handleDescription}
            type="text"
            style={{ width: '100%' }}
          />
        </label>
      </div>
      <button disabled={!isValidForm} onClick={handleAdd}>
        Add Resource
      </button>
    </form>
  );
}

export default InputForm;
