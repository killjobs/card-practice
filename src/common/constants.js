export const DEFAULT_VALUES = {
    dafaultCardNumber : "0000 0000 0000 0000",
    defaultCardName : "jaime applessed",
    defaultDateYY : "YY",
    defaultDateMM : "MM",
    defaultCvc : "000"
};

export const REGULAR_EXPRESSIONS = {
    CARDHOLDERNAME : /^[\s\D]{10,25}/,
    CARDNUMBER : /^[0-9]\s{19,19}/,
    EXPDATEMM : /^[0-9]\s{2,2}/,
    EXPDATEYY : /^[0-9]\s{2,2}/,
    CVC : /^[0-9]\s{3,3}/
};

export const STYLE_ERRORS = {
    DEFAULT_ERROR: 'default-error',
    PRESENTATION_ERROR: 'presentation-error'
};