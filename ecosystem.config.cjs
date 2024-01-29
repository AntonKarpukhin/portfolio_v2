module.exports = {
    deploy: {
        production: {
            user: 'lembrarb',
            host: 'http://51.250.23.158/',
            ref: 'origin/master',
            repo: 'https://github.com/AntonKarpukhin/portfolio_v2',
            path: '/home/lembrarb/portfolio',
            'post-deploy': 'cd frontend && pwd && npm ci && npm run build',
        },
    },
}