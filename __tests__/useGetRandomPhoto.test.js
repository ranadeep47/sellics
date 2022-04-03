import { renderHook, act } from '@testing-library/react-hooks'
import useGetRandomPhoto from '../src/hooks/useGetRandomPhoto'
import 'regenerator-runtime/runtime'
import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

test('useGetRandomPhoto should return data on refetch call', async () => {
  fetch.mockResponseOnce(JSON.stringify({ id: '12345' }))
  const { result } = renderHook(() => useGetRandomPhoto())

  await act(async () => {
    result.current.refetch()
  })

  expect(result.current.data).toHaveProperty('id');
})