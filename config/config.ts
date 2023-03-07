
export default {
    npmClient: 'pnpm',
    routes: [
        { path: "/", component: "index" },
        { path: "/docs", component: "docs" },
    ],
    metas: [
        {
            name: 'viewport',
            content: "width=device-width, initial-scale=1.0"
        }
    ],
}
