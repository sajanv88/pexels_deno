export const get = async <T>(url: string, headers?: Record<string, string>) => {
    const res = await fetch(url, {
        headers: { ...headers, 'content-type': 'application/json' },
        method: 'GET'
    });

    if (res.ok && res.status === 200) {
        const result = await res.json();
        return result as T;
    }

    const err = await res.json();
    throw err;
}