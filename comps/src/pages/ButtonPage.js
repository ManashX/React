import Button from '../components/Button';
import {FaDocker, FaApplePay, FaBitcoin,FaFacebookMessenger} from 'react-icons/fa';
function ButtonPage() {
  return (
    <div>
      <div>
        <Button success outline rounded>
            <FaDocker/>
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
            <FaApplePay/>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
        <FaBitcoin/>
        See Deal!</Button>
        
      </div>
      <div>
        <Button secondary outline>
            <FaFacebookMessenger/>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
