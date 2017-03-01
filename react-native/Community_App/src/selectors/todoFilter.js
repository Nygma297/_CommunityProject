import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions/actionTypes';
debugger;
const todos = (state) => state.get("todo");
const currentFilter = (state) => state.get('filterReducer');

const getFilteredTodo = (todoList,filter) => {
	switch (filter) {
	    case VisibilityFilters.ALL:
	      return todoList;
	    case VisibilityFilters.COMPLETED:
	      return todoList.filter(t => t.completed);
	    case VisibilityFilters.INCOMPLETE:
	      return todoList.filter(t => !t.completed);
 	 }
};

// export default createSelector(
// 	todos,
// 	currentFilter,
// 	getFilteredTodo
// );

export const todoFilter = createSelector(
	todos,
	currentFilter,
	getFilteredTodo
);

// export const todoFilter = (state) => {
// 	debugger;
// 	return createSelector(
// 		todos,
// 		currentFilter,
// 		getFilteredTodo	
// 	)
// }