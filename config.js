
module.exports = {
  "staticFilesDirectory": "htdocs",
  "pathlist": [ // similar to a library list in an IBM i job. Used to search directory paths for Node.js modules within
    "pjssamples",
    "pjshello",
    "pjtest",
    "pjws",
    "puialme",
    "dbs",
  ],
  "initialModules": { // routing to modules (not to ws)
    "/hello": "pjssamples/hello",
    "/hello2": "pjssamples/hello2",
    "/connect4": "pjssamples/connect4",
    "/upload": "pjssamples/upload",
    "/example1": "pjshello/example1",
    "/example2": "pjshello/example2",
    "/example3": "pjshello/example3",
    "/pjtest": "pjtest/pjtest",
    "/prodinq": "puialme/prodinq"
  },
  "dbDriver": "IBMi",
  "timeout": 3600,
  "port": 8037,
  
  // when using ws
  "connectorCredentials": "C:\\Users\\andreas.alme\\Apper\\profound\\day4\\profoundjs\\credentials",
  "connectorUrl": "http://10.210.59.20:8080"
};
