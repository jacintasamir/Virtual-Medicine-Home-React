const CheckboxInput = (props) => {
    return (
      <div className="flex flex-col justify-center gap-2">
        <label className="text-white font-bold">{props.label}</label>
        <input type='checkbox' id='day1' name='day1' value='Sunday'/> 
        <label for='day1' className="text-white font-bold">Sunday</label><br/>
        <input type='checkbox' id='day2' name='day2' value='Monday'/> 
        <label for='day2' className="text-white font-bold">Monday</label><br/>
        <input type='checkbox' id='day3' name='day3' value='Tuesday'/> 
        <label for='day3' className="text-white font-bold">Tuesday</label><br/>
        <input type='checkbox' id='day4' name='day4' value='Wednesday'/> 
        <label for='day4' className="text-white font-bold">Wednesday</label><br/>
        <input type='checkbox' id='day5' name='day5' value='Thursday'/> 
        <label for='day5' className="text-white font-bold">Thursday</label><br/>
        <input type='checkbox' id='day6' name='day6' value='Friday'/> 
        <label for='day6' className="text-white font-bold">Friday</label><br/>
        <input type='checkbox' id='day7' name='day7' value='Saturday'/> 
        <label for='day7' className="text-white font-bold">Saturday</label><br/>
        {...props.register(props.name, props.validation)}
      </div>
    );
  };
  
  export default CheckboxInput;