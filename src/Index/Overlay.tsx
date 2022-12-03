import { OverlayContainer, Overlay, OverlayPanel, Button } from './style';

// const container = document.getElementsByClassName('container')[0];
// const signIn = document.getElementById('sign-in');
// const signUp = document.getElementById('sign-up');

// signUp.onclick = function() {
//     container.classList.add('active');
// }
// signIn.onclick = function() {
//     container.classList.remove('active');
// }
type PropsType = {
  handleActive: (v: string) => void;
};

export default function (props: PropsType) {
  return (
    <OverlayContainer className="overlay_container">
      <Overlay className="overlay">
        <OverlayPanel>
          <h2>welcome back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <Button id="sign-in" onClick={() => props.handleActive('')}>
            sign in
          </Button>
        </OverlayPanel>
        <OverlayPanel right={0}>
          <h2>hello friend!</h2>
          <p>Enter your personal details and start journey with us</p>
          <Button id="sign-up" onClick={() => props.handleActive('active')}>
            sign up
          </Button>
        </OverlayPanel>
      </Overlay>
    </OverlayContainer>
  );
}
