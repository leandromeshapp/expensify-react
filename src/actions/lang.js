import en from '../locale/en'
import pt from '../locale/pt'

export const setLanguage = (locale = 'en') => {
    return (dispatch, getState) => {
        let dictionary = {}
        if(locale == 'pt')
            dictionary = pt
        else
            dictionary = en

    return dispatch({
        type: 'SET_LANGUAGE',
        locale,
        dictionary
    })
  }
}