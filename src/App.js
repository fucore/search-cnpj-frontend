import React from "react";

import GlobalStyle from "./reset";
import Routes from "./routes/routes";

function App() {
	return (
		<React.Fragment>
			<Routes />
			<GlobalStyle />
		</React.Fragment>
	);
}

export default App;
