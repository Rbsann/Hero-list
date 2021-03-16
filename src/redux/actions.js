export function triggerGetHeroesData(heroIds) {
  return {
		type: 'TRIGGER_GET_HEROES',
    heroIds
	}
}

export function triggerGetHeroesSuccess(heroData) {
	return {
		type: 'TRIGGER_GET_HEROES_SUCCESS',
		heroData,
	}
}

export function triggerGetHeroesError(error) {
	return {
		type: 'TRIGGER_GET_HEROES_ERROR',
		error,
	}
}

export function triggerSearchHeroByName(heroName) {
	return {
		type: 'TRIGGER_GET_HERO_BY_NAME',
		heroName,
	}
}

export function triggerGetHeroByNameSuccess(heroData) {
	return {
		type: 'TRIGGER_GET_HERO_BY_NAME_SUCCESS',
		heroData,
	}
}

export function triggerGetHeroByNameError(error) {
	return {
		type: 'TRIGGER_GET_HERO_BY_NAME_ERROR',
		error
	}
}