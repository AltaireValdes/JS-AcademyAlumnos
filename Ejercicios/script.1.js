'use strict';

(function(global){
    const stateGenerator = (initialState) => {
        const state = initialState;
        return{
            getState: () => ({...state}),
            AgregaAlumno: (alumno) => {state.alumnos.push(alumno)}
        };
    };
    global.stateGenerator = stateGenerator;
})(window);
