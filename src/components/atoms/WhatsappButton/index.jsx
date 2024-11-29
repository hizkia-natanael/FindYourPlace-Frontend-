const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/085964385273"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-5 h-5"
      />
      <span>WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
