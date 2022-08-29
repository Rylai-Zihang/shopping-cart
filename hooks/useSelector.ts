import { createSelectorHook } from 'react-redux'
import { RootState } from '../store'

const useSelector = createSelectorHook<RootState>()

export default useSelector