export const ROUTES = {
    NOT_FOUND: '*',
    HOTSITE: {
        ROOT: '/',
        REGISTER: '/registration',
        SETTINGS: {
            EVALUATOR: '/register/evaluator/:challengeId',
            RESOLVER: '/register/resolver'
        },
        HOME: '/contact'
    },
    HUB: {
        CAMERAS: '/hub/cameras'
    },
}