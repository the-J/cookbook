import { useState } from "react";
import { Storage } from "aws-amplify";
import { nanoid } from "nanoid";
import { useNotif } from "../context/notif/notifications.context";

const useUploadPhoto = () => {
  const { pushNotif } = useNotif();

  const [imgName, setImgName] = useState(null);
  const [imgUploading, setImgUploading] = useState(false);

  const uploadImage = async (image) => {
    setImgUploading(true);

    // @INFO conversion to blob for upload to S3
    const base64 = await fetch(image);
    const imageAsBlob = await base64.blob();
    // hacks -> set new header for blob.
    // resolves problems with Safari by using it this way
    // F safari....
    const setNeaBlobHeader = new Blob([imageAsBlob], { type: "image/png" });

    const imgKey = "pantry-image" + nanoid() + ".png";

    // @TODO private or public? use user auth probably
    // @TODO run lambda to reduce weight of img
    Storage.put(imgKey, setNeaBlobHeader, {
      level: "public",
      contentType: "image/png",
    })
      .then((result) => setImgName(result.key))
      .catch((error) => pushNotif(error.message, "err"))
      .finally(() => setImgUploading(false));
  };

  return { imgName, imgUploading, uploadImage };
};

export default useUploadPhoto;
