const path = require("path")

// required paths to work with gatsby
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, "src/components"),
                hooks: path.resolve(__dirname, "src/hooks")
            }
        }
    })
}