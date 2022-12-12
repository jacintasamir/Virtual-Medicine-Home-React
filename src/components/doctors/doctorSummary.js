import { useNavigate } from 'react-router-dom';
import Card from '../../UI/card/Card';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';

const doctorSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const btnOnClickHandler = () => {
    navigate(`/doctors/${props.doctor._id}`);
  };

  return (
    <Card>
      <CardHeader>
        <h2>{props.doctor.name}</h2>
      </CardHeader>
      <CardBody>
        <h3>{props.doctor.specialization}</h3>
        <h3>{props.doctor.location}</h3>
      </CardBody>
      <CardActions>
        <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
          View
        </button>
      </CardActions>
    </Card>
  );
};

export default doctorSummary;