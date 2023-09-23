import { OptButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <OptButton name="good" onClick={onLeaveFeedback} type="button">
        Good
      </OptButton>
      <OptButton name="neutral" onClick={onLeaveFeedback} type="button">
        Neutral
      </OptButton>
      <OptButton name="bad" onClick={onLeaveFeedback} type="button">
        Bad
      </OptButton>
    </div>
  );
};
export default FeedbackOptions;
