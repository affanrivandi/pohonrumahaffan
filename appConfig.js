var developmentDatabase = {
    postgres: {
<<<<<<< HEAD
        host: 'ec2-54-246-115-40.eu-west-1.compute.amazonaws.com',
        port: 5432,
        database: 'dflff9f30e6905',
        user: 'cnboidckfdikgk',
        password: 'c220709e9e6c556da6745085934c4c482d01e2ded8aac9a47f5e76cd36cd4d24'
        }
        }
        
        var connectionString = "postgres://cnboidckfdikgk:c220709e9e6c556da6745085934c4c482d01e2ded8aac9a47f5e76cd36cd4d24@ec2-54-246-115-40.eu-west-1.compute.amazonaws.com:5432/dflff9f30e6905";
=======
    host: 'ec2-54-246-87-132.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'dhlf4nkng1qpa',
    user: 'idrdkfxwtqqoea',
    password: '6defdfc5f89e72c1d6a54cbf8f778354fbb1a958866646e9eff43709372b320e'
    }
    }
    
    var connectionString = "postgres://idrdkfxwtqqoea:6defdfc5f89e72c1d6a54cbf8f778354fbb1a958866646e9eff43709372b320e@ec2-54-246-87-132.eu-west-1.compute.amazonaws.com:5432/dhlf4nkng1qpa";
>>>>>>> 4277ea94043d6c6b93dcb106aba4b250096c5cc6
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = { rejectUnauthorized: false };
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }