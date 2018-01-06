var iptables = require('./index');

iptables.drop({
        action:'-I',
        sport: 8000,
        protocol:'tcp',
        chain: 'OUTPUT',
        sudo:true
    });

    iptables.allow({
        action: '-I',
        chain: 'OUTPUT',
        protocol: 'tcp',
        sport: 8000,
        quota: 5242880,
        sudo: true
    });