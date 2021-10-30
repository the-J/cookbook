import {Storage} from "aws-amplify";

const getImgURL = async (imgKey) => {
  try {
    return await Storage.get(imgKey, {expires: 60});
  } catch (err) {
    // @TODO handle err
    console.log("get img err:", err);
  }
};

export default getImgURL;
