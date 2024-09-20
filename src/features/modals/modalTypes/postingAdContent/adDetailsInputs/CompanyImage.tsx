import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useRef, useState } from "react";

type CompanyImageProps = {
  setJobCompanyImage: (val: string) => void;
};

const CompanyImage = ({ setJobCompanyImage }: CompanyImageProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const storage = getStorage(); // Get a reference to Firebase Storage
      const storageRef = ref(storage, `company-logos/${file.name}`); // Define the storage path
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("Upload progress:", snapshot.bytesTransferred, "/", snapshot.totalBytes);
        },
        (error) => {
          console.error("Upload error:", error);
          setError("Error uploading file.");
          setUploading(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL); // Log the URL for debugging
            setJobCompanyImage(downloadURL); // Ensure the function is called with the correct URL
            setUploading(false);
          } catch (err) {
            console.error("Error getting download URL:", err); // Log error in case of failure
            setError("Failed to get download URL.");
            setUploading(false);
          }
        }
      );
    } catch (err) {
      console.error("Failed to upload image:", err);
      setError("Failed to upload image.");
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="px-2 py-3 w-full outline-none border border-gray-400 bg-gray-300 rounded-md flex flex-col items-start text-gray-500">
        კომპანიის ლოგო
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={handleFileClick}
          className="p-1 border-gray-500 hover:bg-gray-400 border rounded-md mt-1 text-black"
        >
          + ფაილის არჩევა
        </button>
      </label>
      {uploading && <p>Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CompanyImage;
