exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
    getConfig,
}) => {
    console.log(stage);
    const config = getConfig();
    console.log(config)
    if (stage.startsWith('develop')) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom'
                }
            }
        })
    }
    if (stage === 'build-javascript') {
        console.log("stage build js")
        // Turn off source maps
        // actions.setWebpackConfig({
        //     devtool: false
        // })
    }

}