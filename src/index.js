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
            return "Shadow Elevation : dp1"
            break;
        case JSON.stringify(dp2):
            return "Shadow Elevation : dp2"
            break;
        case JSON.stringify(dp4):
            return "Shadow Elevation : dp4"
            break;
        case JSON.stringify(dp6):
            return "Shadow Elevation : dp6"
            break;
        case JSON.stringify(dp8):
             return "Shadow Elevation : dp8"
            break;
        case JSON.stringify(dp12):
            return "Shadow Elevation : dp12"
            break;    
        case JSON.stringify(dp16):
            return "Shadow Elevation : dp16"
            break;
        case JSON.stringify(dp24):
            return "Shadow Elevation : dp24"
            break;
        default:
            if(layer.shadows.length == 0 ){
                return "No Shadow on this layer "
            }
            else
            {
                return "Shadow not style guide.\nContact the design owner"
            }
            
    }
    
};

export default {
    layer
};