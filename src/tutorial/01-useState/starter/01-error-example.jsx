const ErrorExample = () => {
  let count = 0;

  return (
    <div>
      <h2>{count}</h2>
      <button
        type='button'
        onClick={() => {
          count = count + 1;
        }}
      >
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
