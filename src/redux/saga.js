import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getHero } from '../services/getHeroes';
import { getHeroByName } from '../services/getHeroByName';
import { triggerGetHeroesSuccess, triggerGetHeroesError, triggerGetHeroByNameSuccess, triggerGetHeroByNameError } from './actions'
import { toast } from 'react-toastify';

export function* fetchHeroes({heroIds}) {
	try {
		const data = yield all(heroIds.map(heroId => {
      return call(getHero, heroId)
    }));
		yield put(triggerGetHeroesSuccess(data))
	} catch(err) {
		yield put(triggerGetHeroesError(err))
		console.log(err)
	}
}

export function* fetchHero({heroName}) {
	try {
		const data = yield call(getHeroByName, heroName)
		console.log(data)
		if(data.response === 'error') {
			toast.error('No hero found!')
			yield put(triggerGetHeroByNameError('No hero found'))
		}
		else {
			yield put(triggerGetHeroByNameSuccess(data.results))
		}
	} catch(err) {
		yield put(triggerGetHeroByNameError(err))
	}
}


export default function* rootSaga() {
	yield takeLatest('TRIGGER_GET_HEROES', fetchHeroes);
	yield takeLatest('TRIGGER_GET_HERO_BY_NAME', fetchHero);
}