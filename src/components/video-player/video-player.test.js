import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const playerProps = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `https://images-na.ssl-images-amazon.com/images/I/81nwnHTcV2L._AC_SY679_.jpg`,
  muted: true,
  timeout: 1000,
  style: {objectFit: `cover`, width: `280px`, height: `175px`}
};

describe(`VideoPlayer snapshot`, () => {
  it(`VideoPlayer renderer`, () => {
    const tree = renderer
      .create(<VideoPlayer isPlaying={true} {...playerProps}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
