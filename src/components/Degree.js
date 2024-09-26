export const Degree = ({
  school,
  degree,
  fieldOfStudy,
  startDate,
  endDate,
}) => {
  return (
    <div className="flex flex-col bg-gray-50 items-center rounded-xl m-5 border-2 border-green-900 gap-1 p-3">
      <span className="font-bold">{school}</span>
      <span>{degree}</span>
      <span className="">{fieldOfStudy}</span>
      <span>
        {startDate} - {endDate}
      </span>
    </div>
  );
};
