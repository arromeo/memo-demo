import { useRef } from 'react'
import { BehaviorSubject } from 'rxjs'

export function usePubSub() {
  const subjects = useRef({})

  function register(id) {
    subjects.current[id] = new BehaviorSubject()
  }

  return { subjects: subjects.current, register }
}
