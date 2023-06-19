import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import TextField from '@mui/material/TextField';
import css from './Filter.module.css';

export const Filter = () => {
    const dispatch = useDispatch();
    const { filter } = useSelector(selectFilter);

    const onFilterChange = (event) => dispatch(changeFilter(event.target.value))


    return <div className={css.filter__wrapper}>
                <TextField
                    id="outlined-search"
                    label="Find contacts by name"
                    type="text"
                    value={filter}    
                    onChange={onFilterChange} size="small" />
            </div>
}

