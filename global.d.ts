// Allow importing plain CSS files (side-effect imports like import './globals.css')
// Also include common module patterns so TS doesn't error during next build.
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';
