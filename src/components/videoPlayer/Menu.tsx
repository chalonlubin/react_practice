export default function Menu({ onSelectVideo, videoValues }) {

  const handleSelectVideo = (event) => {
    onSelectVideo(event.target.value);
  };

  return (
    <form id="radio-form" onClick={handleSelectVideo}>
      {videoValues.map((value: string, i: number) => (
        <div className="video-inputs" key={i}>
          <input type="radio" name="src" value={value}  />
          {value}
        </div>
      ))}
    </form>
  );
}


/* Massive bug hunt: Figuring out why the radio would not fill properly. Fix was removing uuid. */
