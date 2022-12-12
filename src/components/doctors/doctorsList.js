import doctorSummary from './doctorSummary';

const doctorsList = (props) => {
  return (
    <div className="grid grid-cols-2 gap-5 justify-center items-center">
      {props.doctors.map((d) => (
        <doctorSummary doctor={d} key={d._id} />
      ))}
    </div>
  );
};

export default doctorsList;