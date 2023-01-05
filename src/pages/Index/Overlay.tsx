import { OverlayContainer, Overlay, OverlayPanel, Button } from './style';

type PropsType = {
  handleActive: (v: string) => void;
};

export default function (props: PropsType) {
  return (
    <OverlayContainer>
      <Overlay>
        <OverlayPanel id="panel-left">
          <h2>hello friend!</h2>
          <p>Enter your personal details and start journey with us</p>
          <Button id="sign-up" onClick={() => props.handleActive('')}>
            sign up
          </Button>
        </OverlayPanel>
        <OverlayPanel id="panel-right">
          <h2>welcome back!</h2>
          <p>To keep connected with us please login with your personal info</p>
          <Button id="sign-in" onClick={() => props.handleActive('active')}>
            sign in
          </Button>
        </OverlayPanel>
      </Overlay>
    </OverlayContainer>
  );
}
