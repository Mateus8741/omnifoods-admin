/* eslint-disable prettier/prettier */
import { useMutation } from '@tanstack/react-query';
import { completeStatus } from '../api.Config';

export function useStatusComplete() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (id: string) =>
        completeStatus(id),
    onMutate: async () => {
      console.log('updating status...');
    },
    onSuccess: () => {
      alert('Status updated!');
    },
  })

  return { complete: mutate, isSuccess, isPending }
}
