import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState("No file chosen")
  const [videoName, setVideoName] = useState("No file chosen")
  const [audioName, setAudioName] = useState("No file chosen")
  const [video, setVideo] = useState(null)
  const [audio, setAudio] = useState(null)

  const UploadImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    setImageName(e.target.files[0].name)
  }
  const UploadVideo = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]))
    setVideoName(e.target.files[0].name)
  }
  const UploadAudio = (e) => {
    setAudio(URL.createObjectURL(e.target.files[0]))
    setAudioName(e.target.files[0].name)
  }
  const ChangeBgColor = (color) => {
    document.body.style.backgroundColor = color
  }

  return (
    <div className='flex items-start gap-5'>

      <div className='flex flex-col gap-2 items-start'>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="image/*"
            id="imageInput"
            className="hidden"
            onChange={UploadImage}
          />

          <label htmlFor="imageInput" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Choose Image
          </label>
          <p className="text-gray-700 text-sm">{imageName}</p>
        </div>
        <img src={image} className={`size-40 `} style={{ visibility: !image ? 'hidden' : '' }} alt="" />
      </div>

      <div className='flex flex-col gap-2 items-start'>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="video/*"
            id="videoInput"
            className="hidden"
            onChange={UploadVideo}
          />

          <label htmlFor="videoInput" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Choose Video
          </label>
          <p className="text-gray-700 text-sm">{videoName}</p>
        </div>
        <video src={video} controls className={`size-40 `} style={{ visibility: !video ? 'hidden' : '' }}  />
      </div>

      <div className='flex flex-col gap-2 items-start'>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="audio/*"
            id="audioInput"
            className="hidden"
            onChange={UploadAudio}
          />

          <label htmlFor="audioInput" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Choose Audio
          </label>
          <p className="text-gray-700 text-sm">{audioName}</p>
        </div>
        <audio src={audio} controls className={`size-40 `} style={{ visibility: !audio ? 'hidden' : '' }} />
      </div>
      
      <button onClick={() => ChangeBgColor('red')}>Red</button>
      <button onClick={() => ChangeBgColor('green')} >Green</button>
      <button onClick={() => ChangeBgColor('blue')}>Blue</button>
    </div>
    // <div className='size-full flex justify-center items-center'>
    // </div>
  )
}

export default App
