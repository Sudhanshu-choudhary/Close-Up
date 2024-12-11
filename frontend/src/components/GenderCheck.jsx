const GenderCheck = () => {
  return (
    <div className="flex mt-4">
      <label className="label"><span className="text-base label-text mr-4">Gender</span></label>
      <div className="flex space-x-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="Male"
            className="radio radio-primary mr-2"
          />
          <span className="label-text">Male</span>
        </label>
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="Female"
            className="radio radio-primary mr-2"
          />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
