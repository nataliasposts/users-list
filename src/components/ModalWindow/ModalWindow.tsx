import UserDto from "../../types/UserDto";
import TextEnum from "../../types/enums/TextEnum";
import "./ModalWindow.scss";

type ModalWindowProps = {
  user: UserDto;
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ModalWindow = ({ user, onClose }: ModalWindowProps) => {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="title">{user?.name}</h3>
            <button onClick={onClose} className="button-close" type="button">
              <p>{TextEnum.CLOSE}</p>
            </button>
          </div>
          <div className="modal-info">
            <p className="modal-info_item">
              {TextEnum.COMPANY}{" "}
              <span className="info-item_text">{user?.company?.name}</span>
            </p>
            <p className="modal-info_item">
              {TextEnum.ADDRESS}{" "}
              <span className="info-item_text">
                {user?.address?.city}, {user?.address?.street}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalWindow;
