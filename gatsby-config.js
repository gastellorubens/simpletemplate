const domen = "https://mydomain.net"


module.exports = {
    siteMetadata:{
        siteUrl: getSiteUrl()
    },
    plugins: [
        addSCSSPlugin(),
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/icons/icon32.png`
            },
        },
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sitemap`
    ]
}
function addSCSSPlugin() {
    if (process.env.NODE_ENV == 'development') {
        return {
            resolve: `gatsby-plugin-sass`,
            options: {
                sourceMap: true,
                sourceComments: true
            }//https://github.com/webpack-contrib/css-loader
        }
    }
    else if (process.env.NODE_ENV == 'production') {
        return {
            resolve: `gatsby-plugin-sass`,
            options: {
                sourceMap: false,
                sourceComments: false
            }
        }
    }
    else {
        if (process.env.gatsby_executing_command != 'serve') {
            throw new Error("Invalid Environment")
        }
    }
    //https://github.com/sass/node-sass
    // sassOptions:(loaderContext)=>{
    //   const { resourcePath, rootContext } = loaderContext;
    //   const relativePath = path.relative(rootContext, resourcePath);
    //   console.log(relativePath)
    // }
    //includePaths: ["./src/styles"],
    //data: "@import \"custom.scss\";"
}
function getSiteUrl(){
    return domen;
}