import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderStyles.css';
import { useSelector } from 'react-redux';
import { selectPhotoRecipes } from '../../redux/selectors';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
// import deleteIcon from '../../images/close_icon.svg';

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#252525' }}
      onClick={onClick}
    >
      <IoIosArrowForward size={16} />
    </div>
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#252525' }}
      onClick={onClick}
    >
      <IoIosArrowBack size={16} />
    </div>
  );
};

export const SliderImages = () => {
  const images = useSelector(selectPhotoRecipes);
  console.log(images);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, i) => (
        // <picture className="picture-custom" key={i}>
        //   <source srcSet={`${image.THUMBNAIL}`} media="(max-width: 743px)" />
        //   <source
        //     srcSet={`${image.REGULAR}`}
        //     media="(min-width: 744px) and (max-width: 1439px)"
        //   />
        //   <source srcSet={`${image.LARGE}`} media="(min-width: 1440px)" />
        //   <img
        //     src={image.REGULAR}
        //     alt={image.label}
        //     style={{ width: '111px' }}
        //   />
        //   </picture>

        <img key={image.id} src={image.image} alt={image.label} />
      ))}
    </Slider>
  );
};
