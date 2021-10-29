import React, { useRef, useState } from "react";

let player = {};

const ImageCapture = () => {
  const cameraNumber = useRef(0);

  const [imageDataURL, setImageDataURL] = useState(null);

  const initializeMedia = async () => {
    //reset if set earlier
    setImageDataURL(null);

    if (!("mediaDevices" in navigator)) {
      navigator.mediaDevices = {};
    }

    // create getUserMedia if not available
    // or reassign if not created before asking
    // user for permission
    if (!("getUserMedia" in navigator.mediaDevices)) {
      // check if does not have to fire
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

    //Get the details of video inputs of the device
    const videoInputs = await getListOfVideoInputs();
    console.log({ videoInputs });

    //The device has a camera
    if (videoInputs.length) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId: {
              exact: videoInputs[cameraNumber.current].deviceId,
            },
          },
        })
        .then((stream) => {
          console.log({ stream });
          player.srcObject = stream;
        })
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
    console.log("capturecanvas");
    const canvas = document.createElement("canvas");
    canvas.width = player.videoWidth;
    canvas.height = player.videoHeight;

    const context2D = canvas.getContext("2d");
    context2D.drawImage(player, 0, 0, canvas.width, canvas.height);

    player.srcObject?.getVideoTracks().forEach((track) => {
      track.stop();
    });

    console.log(canvas.toDataURL());
    setImageDataURL(canvas.toDataURL());
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

      // switch to second camera
      if (cameraNumber.current === 0) {
        cameraNumber.current = 1;
      }
      // switch to first camera
      else if (cameraNumber.current === 1) {
        cameraNumber.current = 0;
      }

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
    const enumerateDevices = await navigator.mediaDevices.enumerateDevices();

    //Filter video outputs (for devices with multiple cameras)
    return enumerateDevices.filter((device) => device.kind === "videoinput");
  };

  const playerORImage = Boolean(imageDataURL) ? (
    <img src={imageDataURL} alt="cameraPic" />
  ) : (
    <video ref={(reference) => (player = reference)} autoPlay muted />
  );

  return (
    <div style={{ border: "1px solid red" }}>
      {playerORImage}
      <button onClick={initializeMedia}>Take Photo</button>
      <button onClick={capturePicture}>Capture</button>
      <button onClick={switchCamera}>Switch</button>
    </div>
  );
};

export default ImageCapture;
