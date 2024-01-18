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
			
			showUploadView: true,
			showUploadFolders: true,
			supportDrives: true,
			multiselect: true,
			
			callbackFunction: (data) => {
				if (data.action === "cancel") {
					
				}
				
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
