import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";

const GoogleDrivePicker = () => {
	const [openPicker, authResponse] = useDrivePicker();
	const handleOpenPicker = () => {
		openPicker({
			clientId:
				"152348345446-7pob9jn538dsurv1vkpq2uek4acco1m0.apps.googleusercontent.com",
			developerKey: "AIzaSyAcGqyDByzQsQyMJj7CCTXbd_5PCeFpYUw",
			viewId: "DOCS",
			// token: token, // pass oauth token in case you already have one
			showUploadView: true,
			showUploadFolders: true,
			supportDrives: true,
			multiselect: true,
			// customViews: customViewsArray, // custom view
			callbackFunction: (data) => {
				if (data.action === "cancel") {
					console.log("User clicked cancel/close button");
				}
				console.log(data);
			},
		});
	};

	return (
		<div>
			<button onClick={() => handleOpenPicker()}>Open Picker</button>
		</div>
	);
};

export default GoogleDrivePicker;
