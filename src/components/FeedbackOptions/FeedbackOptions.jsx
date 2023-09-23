import { nanoid } from 'nanoid';
import { OptButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ good, bad, neutral, onLeaveFeedback }) => {
  return (
    <div>
      <OptButton
        key={nanoid()}
        name="good"
        onClick={onLeaveFeedback}
        type="button"
      >
        Good
      </OptButton>
      <OptButton
        key={nanoid()}
        name="neutral"
        onClick={onLeaveFeedback}
        type="button"
      >
        Neutral
      </OptButton>
      <OptButton
        key={nanoid()}
        name="bad"
        onClick={onLeaveFeedback}
        type="button"
      >
        Bad
      </OptButton>
    </div>
  );
};
export default FeedbackOptions;
