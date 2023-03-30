import { create } from 'zustand';
import produce from 'immer'



const useUserStore = create((set) => ({

  //=================//
  // USER DATA
  //=================//

  data: {
    meta: {
      userName: 'John Smith',
      userEmail: 'john@smith.com',
      companyName: 'Smith Company',
      imageURL: '',
      companyId: '',
    },
  },

  setUserMeta: (metaName, newMeta) => set(
    produce((state) => {
      state.data.meta[metaName] = newMeta
    })
  ),


  //=================//
  // PREFERENCES
  //=================//

  preferences: {
    darkMode: (localStorage.getItem('darkMode')==='true')
  },


  setDarkMode: (newDarkModeState) => {
    set(
      produce((state) => {
        state.preferences.darkMode = newDarkModeState
      })

    )
    localStorage.setItem('darkMode', newDarkModeState);
    
  },


  //=================//
  // ACTIONS
  //=================//
  actions: {
    logout: () => alert('LOG OUT NOT CONNECTED!'),
    gotoCompanyProfile: () => alert('GOTO: Company Profile [NOT CONNECTED]'),
    gotoUserProfile: () => alert('GOTO: User Profile [NOT CONNECTED]')
  },


  setAction: (actionName, newAction) => set(
    produce((state) => {
      state.actions[actionName] = newAction
    })
  ),

}))

export default useUserStore;