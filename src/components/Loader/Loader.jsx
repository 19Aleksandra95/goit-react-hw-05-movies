import { ColorRing } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
<Wrapper>
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#005a28', '#008a3e', '#04d060', '#abbd81', '#849b87']}
/> 
</Wrapper>
);
};

export default Loader;