module.exports = {
    apps: [
        {
            name: "viteapp",
            script: "/home/ubuntu/jenkins/workspace/Workerjob/viteC/server.js",
            cwd: "/home/ubuntu/jenkins/workspace/Workerjob/viteC",
            watch: false,
            instances: "3",
            exec_mode: "cluster"
        }
    ]
};