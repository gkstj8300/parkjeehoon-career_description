import ReactGA from 'react-ga4';

export async function tractPageView(location: string) {
    ReactGA.send({
        hitType: 'pageview',
        page: location,
    });
}