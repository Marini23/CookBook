import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderStyles.css';
import { useSelector } from 'react-redux';
import { selectPhotoRecipes } from '../../redux/selectors';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import deleteIcon from '../../images/delete-icon.svg';
import diskoverPlus from '../../images/diskover_plus.svg';

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
        <div className="image-container" key={image.id}>
          <img src={image.image} alt={image.label} className="slider-image" />
          <div
            className="delete-icon-wrapper"
            // onClick={() => handleDelete(image.id)}
          >
            <img src={deleteIcon} alt="Delete" className="delete-icon" />
          </div>
        </div>
      ))}
      <div className="default-image">
        <img src={diskoverPlus} alt="add recipe" className="add-icon" />
      </div>
    </Slider>
  );
};
