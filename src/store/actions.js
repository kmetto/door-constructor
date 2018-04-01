export function setSeries(series) {
    return {
        type: 'SET_SERIES',
        result: series
    }
}

export function setInstallType(install) {
    return {
        type: 'SET_INSTALL_TYPE',
        result: install
    }
}

export function setLockType(lock) {
    return {
        type: 'SET_LOCK_TYPE',
        result: lock
    }
}

export function setFrontPenType(pen) {
    return {
        type: 'SET_FRONT_PEN_TYPE',
        result: pen
    }
}

export function setRearPenType(pen) {
    return {
        type: 'SET_REAR_PEN_TYPE',
        result: pen
    }
}
