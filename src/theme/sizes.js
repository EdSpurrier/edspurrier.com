const standardSizes = {
    zero: 0,
    micro: 4,
    tiny: 8,
    small: 12,
    medium: 24,
    large: 32,
    xlarge: 48,
    xxlarge: 75,
}

const sizes = {
    standardSizes,

    desktop : {

        nav: {
            main: {
                height: 50
            }
        },
        
        button: {
            default: {
                padding: 20
            }
        }

    },

    mobile : {
        nav: {
            main: {
                height: 50
            }
        },
        
        button: {
            default: {
                padding: 20
            }
        }
        
    },

};

module.exports = sizes;
