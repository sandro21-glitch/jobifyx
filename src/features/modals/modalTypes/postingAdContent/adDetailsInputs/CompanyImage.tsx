import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useRef, useState } from "react";
import ProgressBar from "../../../../../ui/ProgressBar";

type CompanyImageProps = {
  setJobCompanyImage: (val: string) => void;
  setUploading: (val: boolean) => void;
  uploading: boolean;
};

const CompanyImage = ({
  setJobCompanyImage,
  setUploading,
  uploading,
}: CompanyImageProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [localImage, setLocalImage] = useState<string>("");

  const [progress, setProgress] = useState<number>(0);

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
      const storage = getStorage();
      const storageRef = ref(storage, `company-logos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          // console.log(
          //   "Upload progress:",
          //   snapshot.bytesTransferred,
          //   "/",
          //   snapshot.totalBytes
          // );
        },
        (error) => {
          console.error("Upload error:", error);
          setError("Error uploading file.");
          setUploading(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            // console.log("File available at", downloadURL);
            setJobCompanyImage(downloadURL);
            setLocalImage(downloadURL);
            setUploading(false);
          } catch (err) {
            console.error("Error getting download URL:", err);
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
    <div className="w-full">
      <label className="px-2 py-3 w-full outline-none border border-gray-400 bg-gray-300 rounded-md flex flex-col items-start text-gray-500">
        კომპანიის ლოგო
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        {localImage === "" ? (
          <button
            type="button"
            onClick={handleFileClick}
            className="p-1 border-gray-500 w-full hover:bg-gray-400 border rounded-md mt-1 text-black"
          >
            + ფაილის არჩევა
          </button>
        ) : (
          <div>
            <img
              src={localImage}
              loading="lazy"
              alt="logo"
              className="w-16 h-16"
            />
          </div>
        )}
      </label>
      {uploading && <p className="text-center">იტვირთება...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {uploading && <ProgressBar width={progress} />}
    </div>
  );
};

export default CompanyImage;
