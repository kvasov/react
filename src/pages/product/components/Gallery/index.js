import React from 'react';
import { withRouter } from 'react-router';
import { map } from 'lodash/collection';

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
    const { photos, currentImg } = this.props;
    this.setState({
      countImages: photos.length,
      currentImg
    });
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  addListeners() {
    const mainPhoto = this.mainPhoto.current;
    mainPhoto.addEventListener('touchstart', e => this.touchStart(e), {
      passive: false
    });
    mainPhoto.addEventListener('touchmove', e => this.touchMove(e), { passive: false });
    mainPhoto.addEventListener('touchend', () => this.touchEnd(), {
      passive: false
    });
  }

  removeListeners() {
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
      this.state.currentImg == this.state.countImages - 1 ? 0 : parseInt(this.state.currentImg) + 1;

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
    this.removeListeners();
    this.setState(
      {
        fullScreen: !this.state.fullScreen
      },
      () => {
        this.addListeners();
      }
    );
  }

  render() {
    const { photos } = this.props;

    const gallery = (
      <div className="product__photos product-photos">
        <div className="product-photos__main-photo" ref={this.mainPhoto}>
          <img src={photos[this.state.currentImg]} />

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
          {map(photos, (img, key) => (
            <img key={key} src={img} onClick={() => this.handleChangeImg(key)} />
          ))}
        </div>
        <div onClick={() => this.toggleFullScreen()}>
          {this.state.fullScreen ? 'Свернуть' : 'Развернуть'}
        </div>
      </div>
    );

    const content = this.state.fullScreen ? <Modal>{gallery}</Modal> : gallery;

    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default withRouter(Gallery);
