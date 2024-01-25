const ReviewElement = ({ title, value }) => {
  return (
    <div className="flex justify-between">
      <strong className="text-text-color-1">{title}</strong>
      <div className="text-white">{value}</div>
    </div>
  );
};

export default ReviewElement;
