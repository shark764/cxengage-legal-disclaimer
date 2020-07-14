#!groovy​
@Library('sprockets') _

node () {
    // If you want to use a specific node version in your lambda
    // nodeCore.defaultPipeline([
    //     nodeVersion: 'node-version-name'
    // ])

    // If you don't set a node version,
    // it will use node 12.x by default
    nodeCore.defaultPipeline(frontendBuild: true)
}