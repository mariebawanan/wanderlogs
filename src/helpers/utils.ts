import { Logs, Log } from '~types/Log';

export const formatSlug = (url: string) =>
    url &&
    url.length &&
    url
        .replace(/[^\w\s]/gi, '')
        .trim()
        .replace(/\s+/g, '-')
        .toLowerCase();

export const getLogBySlug = (slug: string, logs: Logs) =>
    logs.find((log: Log) => log.slug === slug);
