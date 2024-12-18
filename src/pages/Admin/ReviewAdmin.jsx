import React, { useState, useEffect } from "react";
import { getReviews, deleteReview } from "../../config/reviewStore.js";
import { Sidebar } from "../../components/organisms";
import { AdminHeader } from "../../components/organisms/Header/HeaderAdmin";

const UserAdmin = () => {
  const [existingReviews, setExistingReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [showCount, setShowCount] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews();
        console.log("Original Reviews:", reviews); // Tambahkan ini untuk memeriksa struktur data

        const processedReviews = reviews.map((review) => {
          console.log("Single Review:", review); // Tambahkan ini untuk melihat setiap review

          return {
            ...review,
            id: review._id || review.id, // Tambahkan fallback untuk ID
            userName:
              review.userId.name || review.userId.email || "Unknown User",
            userEmail: review.userId.email || "Unknown Email",
            placeName: review.placeId.name || "Unknown Place",
          };
        });

        setExistingReviews(processedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
      }
    };
    fetchReviews();
  }, []);

  // Filter reviews based on searchTerm
  const filteredReviews = existingReviews
    .filter(
      (review) =>
        review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.placeName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, showCount);

  // Sorting function
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedReviews = [...existingReviews].sort((a, b) => {
      return order === "latest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt);
    });
    setExistingReviews(sortedReviews);
  };

  // Handle show count change
  const handleShow = (count) => setShowCount(parseInt(count));

  // Action handlers
  const handleViewReview = (reviewId) => {
    console.log(`Viewing review with ID: ${reviewId}`);
  };

  // Delete review handler
  const handleDeleteReview = async (reviewId) => {
    try {
      setIsLoading(true);
      // Call delete API
      await deleteReview(reviewId);

      // Remove the deleted review from the state
      setExistingReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );

      setError(null);
    } catch (error) {
      console.error("Error deleting review:", error.message);
      setError("Failed to delete review. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddReview = () => {
    console.log("Navigating to Add Review");
  };

  return (
    <div className="bg-[#E8E8E8] min-h-screen">
      <AdminHeader />
      <div className="flex min-h-[100vh]">
        <Sidebar />

        <div className="bg-white flex-1 min-h-[100vh] rounded-lg p-16 ml-8 flex flex-col space-y-4 items-start">
          {/* Error Message */}
          {error && (
            <div className="w-full bg-red-100 text-red-700 p-4 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Loading Overlay */}
          {isLoading && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#C66E4E]"></div>
            </div>
          )}

          {/* Header Controls */}
          <div className="flex justify-between w-full mb-4 rounded-lg">
            <div className="flex space-x-2 rounded-lg">
              <select
                className="w-[150px] border rounded-lg px-2 py-1"
                value={sortOrder}
                onChange={(e) => handleSort(e.target.value)}
                disabled={isLoading}
              >
                <option value="latest">Sort By: Terbaru</option>
                <option value="oldest">Sort By: Terlama</option>
              </select>
              <select
                className="w-[110px] border rounded-lg px-2 py-1"
                value={showCount}
                onChange={(e) => handleShow(e.target.value)}
                disabled={isLoading}
              >
                <option value="10">Show: 10</option>
                <option value="20">Show: 20</option>
                <option value="30">Show: 30</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full flex justify-center mb-4">
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Cari Review"
                className="w-full pl-10 pr-3 py-2 border rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Reviews Table */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 text-black">No</th>
                <th className="text-left p-2 text-black">Email</th>
                <th className="text-left p-2 text-black">Tempat</th>
                <th className="text-left p-2 text-black">Review</th>
                <th className="text-left p-2 text-black">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 text-black">1</td>
                <td className="p-2 text-black">fathul@gmail.com</td>
                <td className="p-2 text-black">Kupiku Coffee Umbulharjo</td>
                <td className="p-2 text-black">Bagus Sekali</td>
                <td className="p-2">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-400 disabled:opacity-50"
                      onClick={() => handleDeleteReview(review.id)}
                      disabled={isLoading}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
