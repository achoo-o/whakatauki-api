import {
  useQuery,
} from '@tanstack/react-query'
import { getWhakatauki } from '../apis/whakatauki.ts'

export function useWhakatauki() {
  const query = useQuery({ queryKey: ['whakatauki'], queryFn: getWhakatauki })
  return {
    ...query,
  }
}