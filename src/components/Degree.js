export const Degree = ({
  school,
  degree,
  fieldOfStudy,
  startDate,
  endDate,
  imageSrc,
}) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow m-5 bg-darkGreen border-gray-700">
      <img className="rounded-t-lg h-56 w-96" src={imageSrc} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-lightGrey">
          {fieldOfStudy}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{degree}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">{school}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};
