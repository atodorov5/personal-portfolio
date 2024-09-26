export const Degree = ({
  school,
  degree,
  fieldOfStudy,
  startDate,
  endDate,
}) => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow m-5 bg-darkGreen border-gray-700">
      <img
        className="rounded-t-lg"
        src="https://media.istockphoto.com/id/1371896330/photo/happy-asian-woman-in-his-graduation-day.jpg?s=2048x2048&w=is&k=20&c=BPxRWW2giC8njzKbwYiZWtOFbDixv2jeXdYBYRUnNSo="
        alt=""
      />
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
