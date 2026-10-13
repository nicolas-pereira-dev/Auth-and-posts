import DetailRow from "../../components/detail-row/detail-row";
import SubmitButton from "../../components/submit-button/submit-button";
import { User } from "../../models/user";
import './user-profile-page.css';
import { logout } from "../../services/authentication-service";

function UserProfilePage(props: {user: User}) {
    return (
    <div className="user-profile-page">
        <h2>User profile</h2>
        <div className="user-profile-details">
            <DetailRow label="Firstname" value={props.user.firstName} />
            <DetailRow label="Lastname" value={props.user.lastName} />
            <DetailRow label="Email" value={props.user.email} />
            <SubmitButton label="Logout" onClick={logout} />
        </div>
    </div>);
}

export default UserProfilePage;