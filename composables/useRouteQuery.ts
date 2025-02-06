import { useUrlSearchParams } from '@vueuse/core'
import { computed, Ref } from 'vue'

export function useRouteQuery(key: string, defaultValue: string = ''): Ref<string> {
  const urlSearchParams = useUrlSearchParams<Record<string, string>>('history')

  return computed({
    get: () => urlSearchParams[key] ?? defaultValue,
    set: value => {
      urlSearchParams[key] = value
    },
  })
}
