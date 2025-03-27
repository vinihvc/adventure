export const IS_DEV = import.meta.env.NODE_ENV === 'development'

export const DEBUG = import.meta.env.DEBUG_TOOLS

export const HIDE_DEV_TOOLS = !IS_DEV || !DEBUG
