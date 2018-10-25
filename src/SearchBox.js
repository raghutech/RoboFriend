import React from 'react';

const SearchBox = ({SearchField, searchChange}) => {
	return (
		<div>
			<input 
				className='pa3 bg-lightest-blue'
				type='search' 
				placeholder='search robots'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;