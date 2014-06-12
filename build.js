({
    baseUrl: 'js',
    paths: {
        jquery: 'vendor/jquery'
    },
    excludeShallow: ['ready', 'config', 'jquery', 'all'],
    name: 'all',
    out: 'js/all-compiled.js'
})