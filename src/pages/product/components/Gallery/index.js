import React from 'react';
import { map } from 'lodash/collection';
import { withRouter } from 'react-router';

import Modal from 'core/components/Modal/index';

import './style.scss';

class Gallery extends React.PureComponent {
  mainPhoto = React.createRef();

  state = {
    countImages: 0,
    currentImg: 0,
    isSwipe: false,
    startPointX: 0,
    hasBeenSwiped: false,
    fullScreen: false
  };

  componentDidMount() {
    const { location } = this.props;
    console.log(location);

    const mainPhoto = this.mainPhoto.current;

    this.setState({
      countImages: this.props.photos.length,
      currentImg: location.search.split('img=').length > 1 ? location.search.split('img=')[1] : 0
    });

    mainPhoto.addEventListener('touchstart', e => this.touchStart(e), {
      passive: false
    });
    mainPhoto.addEventListener('touchmove', e => this.touchMove(e), { passive: false });
    mainPhoto.addEventListener('touchend', () => this.touchEnd(), {
      passive: false
    });
  }

  componentWillUnmount() {
    const mainPhoto = this.mainPhoto.current;
    mainPhoto.removeEventListener('touchstart', this.touchStart, { passive: false });
    mainPhoto.removeEventListener('touchmove', this.touchMove, { passive: false });
    mainPhoto.removeEventListener('touchend', this.touchEnd, { passive: false });
  }

  touchStart(e) {
    this.setState({
      isSwipe: true,
      startPointX: e.changedTouches[0].pageX
    });
  }

  touchMove(event) {
    event.preventDefault();
    event.stopPropagation();

    if (event.targetTouches.length < 2) {
      let offsetX = 0;
      offsetX = event.changedTouches[0].pageX - this.state.startPointX;

      if (Math.abs(offsetX) > 100 && !this.state.hasBeenSwiped) {
        if (offsetX < 0) {
          this.showNext();
        } else {
          this.showPrev();
        }
      }
    }
  }

  showPrev() {
    const newVal =
      this.state.currentImg == 0 ? this.state.countImages - 1 : this.state.currentImg - 1;

    this.setState({
      hasBeenSwiped: true
    });

    this.handleChangeImg(newVal);
  }

  showNext() {
    const newVal =
      this.state.currentImg == this.state.countImages - 1 ? 0 : this.state.currentImg + 1;

    this.setState({
      hasBeenSwiped: true
    });

    this.handleChangeImg(newVal);
  }

  touchEnd() {
    this.setState({
      isSwipe: false,
      hasBeenSwiped: false
    });
  }

  handleChangeImg(i) {
    const { history } = this.props;
    history.push({
      search: `?img=${i}`
    });
    this.setState({
      currentImg: i
    });
  }

  toggleFullScreen() {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  }

  render() {
    const gallery = (
      <div className="product__photos product-photos">
        <div className="product-photos__main-photo" ref={this.mainPhoto}>
          <img src={this.props.photos[this.state.currentImg].fields.file.url} />

          <div
            onClick={() => this.showPrev()}
            className="product-photos__nav product-photos__nav--prev"
          >
            &laquo;
          </div>
          <div
            onClick={() => this.showNext()}
            className="product-photos__nav product-photos__nav--next"
          >
            &raquo;
          </div>
        </div>

        <div className="product-photos__list-photos">
          {map(this.props.photos, (img, key) => (
            <img key={key} src={img.fields.file.url} onClick={() => this.handleChangeImg(key)} />
          ))}
        </div>
        <div onClick={() => this.toggleFullScreen()}>
          {this.state.fullScreen ? 'Свернуть' : 'Развернуть'}
        </div>
      </div>
    );

    const modal = this.state.fullScreen ? <Modal>{gallery}</Modal> : null;

    return (
      <React.Fragment>
        {gallery}
        {modal}
      </React.Fragment>
    );
  }
}

export default withRouter(Gallery);
