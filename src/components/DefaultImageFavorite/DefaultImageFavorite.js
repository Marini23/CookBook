import default_mobile from '../../images/defaultAlt_mobile.jpg';
import default_mobile_2x from '../../images/defaultAlt_mobile_2x.jpg';
import default_tablet from '../../images/defaultAlt_favorite_tablet.jpg';
import default_tablet_2x from '../../images/defaultAlt_favorite_tablet_2x.jpg';
import default__desktop from '../../images/defaultAlt_favorite_desktop.jpg';
import default__desktop_2x from '../../images/defaultAlt_favorite_desktop_2x.jpg';
import defaultAlt from '../../images/defaultAlt.jpg';
import { Picture } from './DefaultImageFavorite.styled';

export const DefaultImageFavorite = () => {
  return (
    <>
      <Picture>
        <source
          srcSet={`${default_mobile}, ${default_mobile_2x} 2x`}
          media="(max-width: 743px)"
        />
        <source
          srcSet={`${default_tablet}, ${default_tablet_2x} 2x`}
          media="(min-width: 744px) and (max-width: 1439px)"
        />
        <source
          srcSet={`${default__desktop}, ${default__desktop_2x} 2x`}
          media="(min-width: 1440px)"
        />
        <img src={defaultAlt} alt="illustration" />
      </Picture>
    </>
  );
};
