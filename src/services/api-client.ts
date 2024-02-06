import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'c4e98e2d19b641aa8bf9bfba136b546f',
	},
});
