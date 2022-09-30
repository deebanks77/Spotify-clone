import React from "react";
import { useSpotifyContextValue } from "../../store/spotify_context";
import CurrentTrack from "./CurrentTrack";

function Footer() {
  const [{ playing }, dispatch] = useSpotifyContextValue();

  return <div>{playing && <CurrentTrack playing={playing} />}</div>;
}

{
  /* <Slider aria-label="Volume" value={value} onChange={handleChange} /> */
}

export default React.memo(Footer);
