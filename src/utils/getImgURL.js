import { Storage } from "aws-amplify";

const getImgURL = async (imgKey) => {
  try {
    // Storage max age
    return await Storage.get(imgKey, { expires: 60 * 60 * 24 * 7 });
  } catch (err) {
    // @TODO handle err
    console.log("get img err:", err);
  }
};

export default getImgURL;
