import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineCamera, MdOutlineFlipCameraIos } from "react-icons/all";

let player = {};

const ImageCapture = ({ startCamera, uploadImage }) => {
  const cameraNumber = useRef(0);
  const [imageDataURL, setImageDataURL] = useState(null);

  const initializeMedia = async () => {
    setImageDataURL(null);
    if (!("mediaDevices" in navigator)) navigator.mediaDevices = {};
    if (!("getUserMedia" in navigator.mediaDevices)) {
      navigator.mediaDevices.getUserMedia = (constraints) => {
        const getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          // @TODO need to handle this better
          return Promise.reject(new Error("getUserMedia Not Implemented"));
        }

        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    const videoInputs = await getListOfVideoInputs();

    if (videoInputs.length) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId: {
              exact: videoInputs[cameraNumber.current].deviceId,
            },
          },
        })
        .then((stream) => (player.srcObject = stream))
        .catch((error) => {
          // @TODO throw error like it should be
          console.error("no video", { error });
        });
    } else {
      // @TODO throw notif about the situation
      console.log("No camera mate!");
    }
  };

  const capturePicture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = player.videoWidth;
    canvas.height = player.videoHeight;

    const context2D = canvas.getContext("2d");
    context2D.drawImage(player, 0, 0, canvas.width, canvas.height);

    player.srcObject?.getVideoTracks().forEach((track) => {
      track.stop();
    });

    const img = canvas.toDataURL();
    setImageDataURL(img);
    return uploadImage(img);
  };

  const switchCamera = async () => {
    const listOfVideoInputs = await getListOfVideoInputs();

    // The device has more than one camera
    if (listOfVideoInputs.length > 1) {
      if (player.srcObject) {
        player.srcObject.getVideoTracks().forEach((track) => {
          track.stop();
        });
      }

      if (cameraNumber.current === 0) cameraNumber.current = 1;
      else if (cameraNumber.current === 1) cameraNumber.current = 0;

      // Restart based on camera input
      return initializeMedia();
    } else if (listOfVideoInputs.length === 1) {
      // @TODO throw notif about the situation
      console.log("There is one camera man!");
    } else {
      // @TODO throw notif about the situation
      console.log("Yo! No camera found!");
    }
  };

  const getListOfVideoInputs = async () => {
    // Get the details of audio and video output of the device
    //nFilter video outputs (for devices with multiple cameras)
    const enumerateDevices = await navigator.mediaDevices.enumerateDevices();
    return enumerateDevices.filter((device) => device.kind === "videoinput");
  };

  const view = imageDataURL ? (
    <img src={imageDataURL} alt="camera" />
  ) : (
    <video ref={(reference) => (player = reference)} autoPlay muted />
  );

  const stopCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => stream.getTracks().forEach((track) => track.stop()))
      .catch((err) => console.log({ err }));
  };

  useEffect(() => {
    if (startCamera) return initializeMedia();
    return () => stopCamera();
  }, [startCamera]);

  return (
    <div className="block">
      {view}
      <div className="buttons block is-grouped is-right">
        <button onClick={capturePicture} className="button is-primary is-large">
          <AiOutlineCamera />
        </button>
        <button className="button is-info is-large" onClick={switchCamera}>
          <MdOutlineFlipCameraIos />
        </button>
      </div>
    </div>
  );
};

ImageCapture.propTypes = {
  startCamera: PropTypes.bool.isRequired,
  uploadImage: PropTypes.func.isRequired,
};

export default ImageCapture;
