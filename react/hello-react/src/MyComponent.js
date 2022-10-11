import PropTypes from 'prop-types';

const MyComponent = ({name, children}) => {
  // const { name, children } = ohMy;
  return <div>
    my new and fancy component! hi! {name}<br/>
    my child's new and fancy component! hi! {children}
    </div>
};

MyComponent.defaultProps = {
  name: 'default name haha oh my!'
}

MyComponent.propTypes = {
  name: PropTypes.string
}

export default MyComponent;