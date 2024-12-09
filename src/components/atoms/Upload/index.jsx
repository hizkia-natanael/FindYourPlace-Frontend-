const Upload = ({ src, ...props }) => {
  return (
    <div>
      {src && <img src={src} alt="Preview" />}
      <input type="file" {...props} />
    </div>
  );
};
export default Upload;
