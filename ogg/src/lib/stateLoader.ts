export const loadState = () => {
    try {
      let serializedState = localStorage.getItem("http://ogg.kr:state");
  
      if (serializedState === null) {
        return;
      }
  
      return JSON.parse(serializedState);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const saveState = (state: any) => {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem("http://ogg.kr:state", serializedState);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const initialState = () => {
    localStorage.removeItem("http://ogg.kr:state");
  };
  