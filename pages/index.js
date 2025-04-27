import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

const TRACKING_ID = process.env.GA_MEASUREMENT_ID; // Use the correct variable name

if (TRACKING_ID) {
    ReactGA.initialize(TRACKING_ID);
} else {
    console.warn("Google Analytics Measurement ID is missing.");
}

function App() {
    return (
        <>
            <Meta />
            <Ubuntu />
        </>
    );
}

export default App;