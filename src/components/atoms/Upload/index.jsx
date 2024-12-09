const Upload = ({ src, ...props }) => {
  return (
    <div>
      {src && <img src={src} alt="Preview" className="w-20" />}
      <input type="file" {...props} accept="image/*" />
    </div>
  );
};
export default Upload;
