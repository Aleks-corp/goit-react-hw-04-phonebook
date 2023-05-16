import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
