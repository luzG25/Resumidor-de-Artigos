function Error(props) {
  return (
    <div className="text-center mt-5">
      <h3 className="font-bold text-sm">Ocorreu um erro ...</h3>
      <p className="text-gray-400 text-xs mt-1">
        An error occured: {props.error}
      </p>
    </div>
  );
}

export default Error;
