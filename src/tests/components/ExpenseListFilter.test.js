import React from 'react';
import { shallow } from 'enzyme';
import  {ExpenseListFilters}  from '../../components/ExpensesListFilters';
import { filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow (
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters correctly with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'text';
    wrapper.find('input').simulate('change',{
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes', () => {
    const startDate = moment();
    const endDate = moment().add(3, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
         startDate, 
         endDate
    });
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
});

test('should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
})
