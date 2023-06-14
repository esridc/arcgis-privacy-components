const cookieLocalStorageKey = 'cookieSettings';

export enum CookieOptions {
    necessary = 'necessary',
    targeting  = 'targeting',
    performance  = 'performance',
    functional  = 'functional',
}
export type CookieConfig = {
    [key in CookieOptions]?: boolean;
};

const defaultCookies: CookieConfig = {
    [CookieOptions.necessary]: null,
    [CookieOptions.targeting]: true,
    [CookieOptions.performance]: true,
    [CookieOptions.functional]: true
};

export function getDefaultCookies() {
    return defaultCookies;
}

export function storeCookieConfig( config:CookieConfig ) {
    localStorage.setItem(cookieLocalStorageKey, JSON.stringify({ ...config }));
}

export function getCookieConfig( ) {
    const storage = localStorage.getItem(cookieLocalStorageKey);
    if(!!storage) {
        return JSON.parse(storage)
    } else {
        return getDefaultCookies();
    }
    
}