import { useState } from "react";
import { Storage } from "aws-amplify";
import { nanoid } from "nanoid";

const useUploadPhoto = () => {
  const [imgName, setImgName] = useState(null);

  const uploadImage = async (image) => {
    // @INFO conversion to blob for upload to S3
    const base64 = await fetch(image);
    const imageAsBlob = await base64.blob();
    // hacks -> set new header for blob.
    // resolves problems with Safari by using it this way
    // F safari....
    const setNeaBlobHeader = new Blob([imageAsBlob], { type: "image/png" });

    const imgKey = "pantry-image" + nanoid() + ".png";
    // @TODO private or public? use user auth probably
    Storage.put(imgKey, setNeaBlobHeader, {
      level: "public",
      contentType: "image/png",
    }).then((result) => {
      setImgName(result.key);

      // const image = {
      //   file: {
      //     bucket: awsconfig.aws_user_files_s3_bucket,
      //     region: awsconfig.aws_user_files_s3_bucket_region,
      //     key: imgKey,
      //   },
      // };

      // return uploadToStore(image, imgKey);
    });
  };

  return { imgName, uploadImage };
};

export default useUploadPhoto;
