export default function Video({ videoSrc }) {
  return (
   <>
      <video loop controls autoPlay muted src={videoSrc} />
    </>
  );
}
