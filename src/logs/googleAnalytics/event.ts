import ReactGA from 'react-ga4';

type EventProps = {
    action?: string;
    category?: string;
    label?: string;
    value?: string;
}

export async function tractEvent({ action, category, label, value }: EventProps) {
    ReactGA.send({
        action: action,
        category: category,
        label: label,
        value: value,
    });
}