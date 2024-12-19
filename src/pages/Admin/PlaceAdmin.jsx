import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import usePlaceStore from '../../config/placeStore';
import usePlaceFormStore from '../../config/placeFormStore';
import { Upload } from '../../components/atoms';
import { Sidebar } from '../../components/organisms';

const PlacesAdmin = () => {
  const { form, imgPreview, setFormData, setImgPreview, resetFormData } = usePlaceFormStore();
  const { getPlaceById, addPlace, updatePlace, places } = usePlaceStore();
  const { name, description, googleMapsLink, address } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setIsUpdate(true);
        const place = await getPlaceById(id);
        setFormData("name", place.name);
        setFormData("description", place.description);
        setFormData("googleMapsLink", place.googleMapsLink);
        setFormData("address", place.address);
        setFormData("image", place.image);
        setImgPreview(place.image);
      };
      fetchData();
    } else {
      resetFormData();
    }
  }, [id, getPlaceById, setFormData, setImgPreview, resetFormData]);

  const onImgUpload = (e) => {
    const file = e.target.files[0];
    setImgPreview(URL.createObjectURL(file));
    setFormData("image", file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      updatePlace(id, form);
    } else {
      addPlace(form);
    }
    navigate("/admin/admin-place");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full h-24 px-8 flex items-center bg-white">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Main Content */}
      <div className="flex h-[89vh] w-full relative top-[1vh]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Panel */}
        <div className="flex-1 mx-8">
          {/* Table Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">No</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Image</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Nama</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {places?.map((place, index) => (
                    <tr key={place.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4">
                        {place.image ? (
                          <img
                            src={place.image}
                            alt={place.name}
                            className="h-12 w-12 object-cover rounded"
                          />
                        ) : (
                          <span className="text-sm text-gray-500">No image</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{place.name}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => navigate(`/admin/edit-place/${place.id}`)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm mr-2 hover:bg-blue-700 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(place.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
              {isUpdate ? "Edit Place" : "Add New Place"}
            </h2>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Place Name"
                value={name}
                onChange={(e) => setFormData("name", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <textarea
                placeholder="Place Description"
                value={description}
                onChange={(e) => setFormData("description", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
              />

              <input
                type="text"
                placeholder="Place Address"
                value={address}
                onChange={(e) => setFormData("address", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Place Location"
                value={googleMapsLink}
                onChange={(e) => setFormData("googleMapsLink", e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <Upload
                onChange={(e) => onImgUpload(e)}
                src={imgPreview}
                className="w-full"
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-[#C66E4E] text-white py-2 rounded hover:bg-[#B55E3E] transition-colors"
              >
                Save Place
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesAdmin;