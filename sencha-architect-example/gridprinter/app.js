meta reconf

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ext: '.',
        'Ext.ux': 'ux'
    }
});

Ext.application({
    autoCreateViewport: true,
    name: 'Example',
    controllers: [
        'Company'
    ]
});
