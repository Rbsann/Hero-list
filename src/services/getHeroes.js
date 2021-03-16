import axios from "axios"

export const getHero = async (heroId) => {
	const requestUrl = `https://superheroapi.com/api.php/${process.env.REACT_APP_HERO_TOKEN}/${heroId}`
	const response = await axios.get(requestUrl)
	return response.data
}
