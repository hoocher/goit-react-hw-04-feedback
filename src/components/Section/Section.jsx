import { SectionSec } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionSec>
      <h2>{title}</h2>
      {children}
    </SectionSec>
  );
};

export default Section;
