import { ThemeState } from '../../interfaces/themeState';
import { darkTheme, lightTheme } from '../../theme/theme';
import { UserState } from './UserContext';

type UserAction = 
    | { type: 'set_user', payload: UserState }
    | { type: 'get_user' }

export const userReducer = ( state: UserState,  action: UserAction ): UserState => {
    switch ( action.type ) {
        case 'set_user':
            return { ...action.payload }
        
        case 'get_user':
                return { ...state }
    
        default:
            return state;
    }
}

