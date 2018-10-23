import { hideModal } from "../../action-creators/modal";
import Modal from "../Modal";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.props.hideModal();
  }

  render() {
    return (
      <Modal onClose={this.onClose}>
        <div className="login">
          <h1>Login</h1>
          <p>hello</p>
        </div>
      </Modal>
    );
  }
}

export default LoginModal
