const SAFE_TEXT_REGEX = /^[a-zA-Z0-9 .-]+$/g;
const NUMBER_REGEX = /^\d+$/g;
const LAT_REGEX = /^-?([1-8]?[1-9]|[1-9]0)\.\d{1,6}$/g;
const LNG_REGEX = /^-?((1[0-7]\d)|([1-9]?\d))\.\d{1,6}$/g;

export {
    SAFE_TEXT_REGEX,
    NUMBER_REGEX,
    LAT_REGEX,
    LNG_REGEX
}