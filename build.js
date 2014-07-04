({
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery'
    },
    excludeShallow: ['ready', 'config', 'jquery', 'all'],
    // appDir: '/js',
    name: 'all',
    out: 'js/all-compiled.js'
})