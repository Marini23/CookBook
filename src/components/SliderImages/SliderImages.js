import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhotoRecipes, selectUserId } from '../../redux/selectors';
import deleteIcon from '../../images/delete-icon.svg';
import diskoverPlus from '../../images/diskover_plus.svg';
import arrowRight from '../../images/arrowRight.svg';
import arrowLeft from '../../images/arrowLeft.svg';
import { getRecipeIdFromUrl } from '../../utils';
import { NavLink, useLocation } from 'react-router-dom';
import { deleteRecipeItem } from '../../redux/shoppingSlice/shoppingOperations';

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#252525' }}
      onClick={onClick}
    >
      <img src={arrowRight} alt="arrow next" className="custom-next-arrow" />
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
      <img src={arrowLeft} alt="arrow prev" className="custom-next-arrow" />
    </div>
  );
};

export const SliderImages = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const images = useSelector(selectPhotoRecipes);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const handleDelete = ({ userId, recipeId }) => {
    dispatch(deleteRecipeItem({ userId, recipeId }));
  };

  return (
    <Slider {...settings}>
      {images.map(image => (
        <div className="image-container" key={image.id}>
          <NavLink to={`/recipes/${getRecipeIdFromUrl(image.idLink)}`}>
            <img
              src={image.image}
              alt={image.label}
              state={{ from: location }}
              className="slider-image"
            />
          </NavLink>
          <div
            className="delete-icon-wrapper"
            onClick={() =>
              handleDelete({
                userId,
                recipeId: image.id,
              })
            }
          >
            <img src={deleteIcon} alt="Delete" className="delete-icon" />
          </div>
        </div>
      ))}
      {images.length < 1 && (
        <NavLink to={`/recipes`} state={{ from: location }}>
          <div className="default-image">
            <img src={diskoverPlus} alt="add recipe" className="add-icon" />
          </div>
        </NavLink>
      )}
      {images.length < 2 && (
        <NavLink to={`/recipes`} state={{ from: location }}>
          <div className="default-image">
            <img src={diskoverPlus} alt="add recipe" className="add-icon" />
          </div>
        </NavLink>
      )}
      <NavLink to={`/recipes`} state={{ from: location }}>
        <div className="default-image">
          <img src={diskoverPlus} alt="add recipe" className="add-icon" />
        </div>
      </NavLink>
    </Slider>
  );
};
