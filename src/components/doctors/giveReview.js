import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import SelectInput from '../../UI/form/SelectInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';

const giveReview = (props) => {
    const { register, handleSubmit, formState } = useForm();
  
    const authContext = useContext(AuthContext);

    const doctorDetails = {
        name: props.name,
        specialization: props.specialization,
        schedule: props.schedule,
        location: props.location,
        reviews: reviews
    }
  
    const submitHandler = async (formData) => {
      try {
        review = [formData[0],formData[1],formData[2]]
        doctorDetails.reviews.append(review)
        const response = await fetch(`http://localhost:5000/doctors/${doctorId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `BEARER ${authContext.token}`
          },
          body: JSON.stringify(doctorDetails)
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
          <FormInputError>Name must not be empty</FormInputError>
        )}

        <TextInput
          label="Rating"
          type="number"
          name="rating"
          register={register}
          validation={{ required: true, min: 1, max: 5 }}
        />
        {formState.errors.rating && (
          <FormInputError>Rating must be between 1 and 5.</FormInputError>
        )}
  
        <TextAreaInput
          label="Comment"
          name="feedback"
          register={register}
          validation={{ required: true }}
        />
        {formState.errors.feedback && (
          <FormInputError>Feedback must not be empty.</FormInputError>
        )}
  
        <button
          type="submit"
          className="bg-white rounded-xl my-4 py-2 px-8 self-center"
        >
          Submit Review
        </button>
      </form>
    );
  };
  
  export default giveReview;