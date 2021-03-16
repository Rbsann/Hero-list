import axios from "axios"

export const getHeroByName = async (heroName) => {
	const requestUrl = `https://superheroapi.com/api.php/${process.env.REACT_APP_HERO_TOKEN}/search/${heroName}`
	const response = await axios.get(requestUrl)
	return response.data
}
