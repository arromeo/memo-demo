import { createContext } from 'react'
import { BehaviorSubject } from 'rxjs'

function subscriptionContext() {
	const subjects = {}

	function register(id) {
		subjects[id] = new BehaviorSubject()
	}

	return { subjects, register }
}

export const subscriptions = createContext(subscriptionContext())
