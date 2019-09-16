import {
    dp1,
    dp2,
    dp4,
    dp6,
    dp8,
    dp12,
    dp16,
    dp24
} from './shadow';

function layer(context, layer) {
    switch (JSON.stringify(layer.shadows)) {
        case JSON.stringify(dp1):
            return " 🔆 Elevation : 1dp"
            break;
        case JSON.stringify(dp2):
            return " 🔆 Elevation : 2dp"
            break;
        case JSON.stringify(dp4):
            return " 🔆 Elevation : 4dp"
            break;
        case JSON.stringify(dp6):
            return " 🔆 Elevation : 6dp"
            break;
        case JSON.stringify(dp8):
             return " 🔆 Elevation : 8dp"
            break;
        case JSON.stringify(dp12):
            return " 🔆 Elevation : 12dp"
            break;    
        case JSON.stringify(dp16):
            return " 🔆 Elevation : 16dp"
            break;
        case JSON.stringify(dp24):
            return " 🔆 Elevation : 24dp"
            break;
        default:
            if(layer.shadows.length == 0 ){
                return " 🔆 Elevation : 0dp"
            }
            else
            {
                return "Looks like someone used wrong shadows 👀"
            }
            
    }
    
};

export default {
    layer
};