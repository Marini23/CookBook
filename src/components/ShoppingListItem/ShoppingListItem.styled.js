import styled from 'styled-components';
import { ReactComponent as TrashIcon } from '../../images/trash_icon.svg';

export const ListItem = styled.li`
  width: 100%;
  height: 78px;
  padding: 12px 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(217, 217, 217, 0.35);
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    height: 40px;
    padding: 8px 16px;
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
    padding: 8px 29px;
  }
`;

export const CircleIcon = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fdfdfd;
  border: 0.5px solid #b1b0b2;
  margin-right: 12px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    border: 1px solid #b1b0b2;
  }
  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
    margin-right: 49px;
    border: 1px solid #b1b0b2;
  }
`;

export const DoneCircleIcon = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryOrange};
  border: none;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
    margin-right: 49px;
  }
`;

export const DoneIcon = styled.img`
  width: 12px;
  height: 12px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 16px;
    height: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 16px;
    height: 16px;
  }
`;

export const IngredientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 549px;
    flex-direction: row;
    gap: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 971px;
    flex-direction: row;
    gap: 0;
  }
`;

export const LabelIngredient = styled.h5`
  font-size: 12px;
  line-height: 17.63px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  margin-right: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 20.56px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 23.5px;
  }
`;

export const DoneLabelIngredient = styled.s`
  font-size: 12px;
  line-height: 17.63px;
  font-weight: 400;
  margin-right: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 14px;
    line-height: 20.56px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 23.5px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    margin-left: auto;
  }
  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 48px;
  height: 24px;
  border: none;
  border-radius: 8px;
  background-color: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 0.5px solid ${({ theme }) => theme.colors.grey};
  }
  &:active {
    border: 0.5px solid ${({ theme }) => theme.colors.primaryOrange};
  }
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 56px;
  }
  @media screen and (min-width: 1440px) {
    width: 69px;
    height: 32px;
    border-radius: 20px;
  }
`;

export const MinusIcon = styled.img`
  width: 13px;
  height: 1.25px;
  @media screen and (min-width: 1440px) {
    width: 16px;
    height: 2px;
  }
`;

export const PlusIcon = styled.img`
  width: 9px;
  height: 9px;
  @media screen and (min-width: 1440px) {
    width: 12px;
    height: 12px;
  }
`;

export const NumberWeight = styled.p`
  width: 48px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 17.63px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    width: 56px;
    font-size: 14px;
    font-weight: 20.56px;
  }
  @media screen and (min-width: 1440px) {
    width: 69px;
    font-size: 16px;
    font-weight: 23.5px;
  }
`;

export const TextWeight = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 17.63px;
  color: ${({ theme }) => theme.colors.primaryBlackText};
  margin-left: 12px;
  @media screen and (min-width: 744px) and (max-width: 1439px) {
    font-size: 14px;
    font-weight: 20.56;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    font-weight: 23.5px;
  }
`;

export const ContainerDeleteIcon = styled.div`
  cursor: pointer;
  margin-left: auto;
  color: #252525;
  &:active {
    color: ${({ theme }) => theme.colors.primaryOrange};
  }
`;

export const DeleteIcon = styled(TrashIcon)`
  width: 20px;
  height: 20px;
  fill: none;
  stroke-width: 0.1;
  &:hover {
    stroke-width: 0.25;
  }
`;
