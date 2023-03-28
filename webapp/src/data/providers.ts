import type { BaseSelectOption } from "../shared/shareddtypes";

const SOLID_PROVIDERS: BaseSelectOption[] = [
    {
        content: 'Inrupt.com',
        value: 'https://login.inrupt.com',
    },
    {
        content: 'Inrupt.net',
        value: 'https://inrupt.net/login',
    },
    {
        content: 'Solid Community',
        value: 'https://solid.community',
    },
    {
        content: 'Solid Web',
        value: 'https://solidweb.org',
    },
];

export {
    SOLID_PROVIDERS,
}
