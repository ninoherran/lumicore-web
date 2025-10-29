import {createRoot}                          from 'react-dom/client'
import App                                   from './App.jsx'
import {Provider}                            from "./components/core/ui/provider.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import {SetupScreen}                         from "./components/setup/SetupScreen.jsx";

const router = createBrowserRouter([
									   {
										   path: "/",
										   element: <App/>,
									   },
									   {
										   path: "setup",
										   element: <SetupScreen/>
									   },
								   ]);

createRoot(document.getElementById('root')).render(
	<Provider>
		<RouterProvider router={router}/>
	</Provider>,
)

