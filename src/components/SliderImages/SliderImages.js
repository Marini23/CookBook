import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRecipesInShoppingList,
  selectUserId,
} from '../../redux/selectors';
import { ReactComponent as DeleteIcon } from '../../images/delete-icon.svg';
import { ReactComponent as PlusIcon } from '../../images/diskover_plus.svg';
import { ReactComponent as ArrowRight } from '../../images/arrowRight.svg';
import { ReactComponent as ArrowLeft } from '../../images/arrowLeft.svg';
import { getRecipeIdFromUrl } from '../../utils';
import {
  deleteRecipeItem,
  updateIngredientsRecipeFromShoppingList,
} from '../../redux/shoppingSlice/shoppingOperations';
import { NavLink, useLocation } from 'react-router-dom';

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: '#252525' }}
      onClick={onClick}
    >
      <ArrowRight className="custom-next-arrow" />
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
      <ArrowLeft className="custom-next-arrow" />
    </div>
  );
};

export const SliderImages = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  // const images = useSelector(selectPhotoRecipes);
  const recipes = useSelector(selectRecipesInShoppingList);
  // console.log(recipes);

  // useEffect(() => {}, [recipes]);
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

  const handleDelete = ({ userId, recipeId, ingredients }) => {
    dispatch(deleteRecipeItem({ userId, recipeId }))
      .then(() => {
        console.log(ingredients);
        // Once the recipe is successfully deleted, update the ingredients list
        dispatch(
          updateIngredientsRecipeFromShoppingList({
            userId,
            ingredients,
          })
        );
      })
      .catch(error => {
        console.error(
          'Error during recipe deletion or ingredient update:',
          error
        );
      });
  };

  return (
    <Slider {...settings}>
      {recipes.map(recipe => {
        // console.log(recipe);
        const {
          id,
          idLink,
          defaultImage,
          label,
          THUMBNAIL,
          SMALL,
          LARGE,
          ingredients,
        } = recipe;
        // console.log(ingredients);
        return (
          <div className="image-container" key={id}>
            <NavLink
              to={`/recipes/${getRecipeIdFromUrl(idLink)}`}
              state={{ from: location }}
            >
              <picture className="slider-image">
                <source srcSet={THUMBNAIL} media="(max-width: 743px)" />
                <source
                  srcSet={SMALL}
                  media="(min-width: 744px) and (max-width: 1439px)"
                />
                <source srcSet={LARGE} media="(min-width: 1440px)" />
                <img src={defaultImage} alt={label} className="image-size" />
              </picture>
            </NavLink>
            <div
              className="delete-icon-wrapper"
              onClick={() =>
                handleDelete({ userId, recipeId: id, ingredients })
              }
            >
              <DeleteIcon className="delete-icon" />
            </div>
          </div>
        );
      })}
      {recipes.length < 2 && (
        <NavLink to={`/recipes`} state={{ from: location }}>
          <div className="default-image">
            <PlusIcon className="add-icon" />
          </div>
        </NavLink>
      )}
      {recipes.length < 3 && (
        <NavLink to={`/recipes`} state={{ from: location }}>
          <div className="default-image">
            <PlusIcon className="add-icon" />
          </div>
        </NavLink>
      )}
      <NavLink to={`/recipes`} state={{ from: location }}>
        <div className="default-image">
          <PlusIcon className="add-icon" />
        </div>
      </NavLink>
    </Slider>
  );
};
