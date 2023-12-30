export const ROUTES = {
    NOT_FOUND: '*',
    HOTSITE: {
        ROOT: '/',
        REGISTER: '/registration',
        SETTINGS: {
            LOGIN:'/login',
            MAINPAGE: '/settings',
            EVALUATOR: '/register/evaluator/:challengeId',
            RESOLVER: '/register/resolver'
        },
        CONTACT: '/contact'
    },
    HUB: {
        ROOT: '/hub',
        CAMERAS: '/hub/cameras'
    },
}