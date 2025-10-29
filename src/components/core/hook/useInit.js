import {useEffect}    from "react";
import {setupService} from "../../../service/setupService.js";
import {useNavigate}  from "react-router";

export function useInit() {
	const navigate = useNavigate();

	useEffect(() => {
		setupService.isInit()
					.then(isInit => {
						if (isInit === false) {
							navigate("/setup")
						}
					});
	}, [])
}