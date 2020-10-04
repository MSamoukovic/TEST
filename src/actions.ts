import { ActionTree } from 'vuex';
import { GroupsState, Group } from './state';
import { RootState } from '@/store/state';
import { StudentEndpoint } from './data/Students/student-endpoint';

export const types = {
    LOAD_GROUPS: 'students/loadStudents',
};

export const makeActions = (studentEndpoint: StudentEndpoint): ActionTree<StudentState, RootState> => {
    return {
        async loadStudents({ commit }): Promise<void> {
            const students = await studentEndpoint.get();
            commit('setStudents', students);
        }
       
    };
};