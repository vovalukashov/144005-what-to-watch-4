import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = createRef();
  }

  componentDidUpdate(prevProps) {
    const {timeout = 0} = this.props;
    if (prevProps.isPlaying === this.props.isPlaying) {
      return;
    }

    clearTimeout(this.timer);
    if (this.props.isPlaying) {
      this.timer = setTimeout(() => {
        this.videoRef.current.play();
      }, timeout);
    } else {
      this.videoRef.current.pause();
      this.videoRef.current.load();
    }
  }

  render() {
    const rest = Object.assign({}, this.props);
    delete rest.isPlaying;
    return (
      <video ref={this.videoRef} {...rest} />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  timeout: PropTypes.number,
};

export default VideoPlayer;
