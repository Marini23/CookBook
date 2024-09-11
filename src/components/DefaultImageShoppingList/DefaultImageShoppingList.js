import default_mobile from '../../images/defaultImageShopping_mobile.jpg';
import default_mobile_2x from '../../images/defaultImageShopping_mobile_2x.jpg';
import default_tablet from '../../images/defaultImageShopping_tablet.jpg';
import default_tablet_2x from '../../images/defaultImageShopping_tablet_2x.jpg';
import default__desktop from '../../images/defaultImageShopping_desktop.jpg';
import default__desktop_2x from '../../images/defaultImageShopping_desktop-2x.jpg';
import { Picture } from './DefaultImageShoppingList.styled';

export const DefaultImageShoppingList = () => {
  return (
    <div>
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
        <img src={default__desktop} alt="illustration" />
      </Picture>
    </div>
  );
};
