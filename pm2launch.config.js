module.exports = {
    apps: [{
        name: 'ETH_FULL_NODE_PING',
        script: './index.js',
        env_development: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production'
        },
        cron_restart: "0 * * * *", //service restart every hour
        log_date_format: 'YYYY-MM-DD HH:mm Z'
    }]
};
