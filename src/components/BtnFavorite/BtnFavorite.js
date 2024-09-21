import {
  Btn,
  StyledHeartIcon,
  StyledHeartIconFavorite,
  TextBtn,
} from './BtnFavorite.styled';

export const BtnFavorite = ({ isFavorite, toggleFavorite }) => {
  return (
    <Btn onClick={toggleFavorite}>
      {isFavorite ? (
        <>
          <StyledHeartIconFavorite />
          <TextBtn>Unsave</TextBtn>
        </>
      ) : (
        <>
          <StyledHeartIcon />
          <TextBtn>Save</TextBtn>
        </>
      )}
    </Btn>
  );
};
