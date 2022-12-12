import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import SelectInput from '../../UI/form/SelectInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';
import CheckboxInput from '../../UI/form/CheckboxInput';

const insertDoctor = (props) => {
  const { register, handleSubmit, formState } = useForm();

  const authContext = useContext(AuthContext);

  const hoursOptions =  {
    '1': '08:00',
    '2': '09:00',
    '3': '10:00',
    '4': '11:00',
    '5': '12:00',
    '6': '13:00',
    '7': '14:00',
    '8': '15:00',
    '9': '16:00',
    '10': '17:00',
    '11': '18:00',
    '12': '19:00',
    '13': '20:00'
  };

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('https://vmh.azurewebsites.net/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `BEARER ${authContext.token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form
      className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
        label="Name"
        type="text"
        name="name"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Doctor name must not be empty</FormInputError>
      )}

      <TextAreaInput
        label="Specialization"
        name="description"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.description && (
        <FormInputError>Specialization must not be empty</FormInputError>
      )}

      <TextInput
        label="Location"
        name="location"
        register={register}
        validation={{required: True}}
      />
      {formState.errors.location && (
        <FormInputError>Location must not be empty</FormInputError>
      )}

      <CheckboxInput
        label="Workdays"
        name="days"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.days && (
        <FormInputError>Must select at least one day.</FormInputError>
      )}

      <SelectInput
        label="Starting Hours"
        name="starthours"
        register={register}
        validation={{ required: true }}
        options={hoursOptions}
      />
      {formState.errors.starthours && (
        <FormInputError>Starting work hours must not be empty.</FormInputError>
      )}  

      <SelectInput
        label="Ending Hours"
        name="endhours"
        register={register}
        validation={{ required: true }}
        options={hoursOptions}
      />
      {formState.errors.endhours && (
        <FormInputError>Ending work hours must not be empty.</FormInputError>
      )}  

      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Insert Doctor
      </button>
    </form>
  );
};

export default insertDoctor;