import styled from 'styled-components';
import { Rating } from 'react-simple-star-rating';

export const ModalContainer = styled.form`
  min-width: 335px;
  min-height: 290px;
  /* color: rgb(52 52 52 / 0.8); */
  /* background-color: #fff; */
  background-color: ${({ theme }) => theme.feedbackModal.backgroundColor};
  color: ${({ theme }) => theme.feedbackModal.colorTitle};

  border-radius: 8px;
  padding: 28px 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-width: 468px;
    min-height: 299px;
    padding: 32px;
  }
`;

export const RaitingContainer = styled.div`
  margin-bottom: 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;

export const RaitingLabel = styled.label`
  display: block;
  font-size: 12px;
`;

export const StyledRating = styled(Rating)`
  .star {
    color: #ff0000;
  }
`;

export const StyledReviewButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export const ReviewContainer = styled.div`
  margin-bottom: 20px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;

export const LabelText = styled.label`
  display: block;
  margin-right: auto;
  font-size: 12px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  /* background-color: #e3f3ff; */
  background-color: ${({ theme }) =>
    theme.feedbackModal.backgroundButtonEditColor};
  margin-right: 8px;
  color: #3e85f3;
  transition: all linear 0.3s;

  &:hover {
    color: #fff;
    background-color: #3e85f3;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: none;
  color: #ea3d65;
  background-color: rgb(234 61 101 / 0.2);
  transition: all linear 0.3s;

  &:hover {
    color: #fff;
    background-color: #ea3d65;
  }
`;

export const ReviewInput = styled.textarea`
  min-width: 295px;
  min-height: 130px;
  background-color: ${({ theme }) => theme.feedbackModal.backgroundColor};
  color: ${({ theme }) => theme.feedbackModal.textColor};
  border-radius: 8px;
  padding: 14px 18px;
  outline: none;
  resize: none;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-width: 404px;
    min-height: 127px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  border: none;
  font-weight: 600;
`;

export const SaveEditButton = styled.button`
  min-width: 144px;
  /* background-color: #e5edfa; */
  background-color: ${({ theme }) => theme.feedbackModal.backgroundButton};
  /* color: #343434; */
  color: ${({ theme }) => theme.feedbackModal.textColor};
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  transition: all linear 0.3s;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-width: 198px;
    padding: 15px;
  }

  ${props =>
    props.rating > 0 &&
    !props.cancelButtonFocused &&
    `
    background-color: #3e85f3;
    color: #fff;
  `}

  ${props =>
    props.cancelButtonFocused &&
    `
    background-color: #e5edfa;
    color: #343434;
  `}

  &:disabled {
    /* pointer-events: none; */
  }

  &:hover {
    background-color: #3e85f3;
    color: #fff;
  }
`;

export const CancelButton = styled.button`
  min-width: 144px;
  /* background-color: #e5edfa; */
  background-color: ${({ theme }) => theme.feedbackModal.backgroundButton};
  /* color: #343434; */
  color: ${({ theme }) => theme.feedbackModal.textColor};
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  transition: all linear 0.3s;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-width: 198px;
    padding: 15px;
  }

  &:hover {
    background-color: #3e85f3;
    color: #fff;
  }
`;
