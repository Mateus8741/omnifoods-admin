/* eslint-disable prettier/prettier */
import { useMutation } from '@tanstack/react-query';
import { updateStatus } from '../api.Config';

export function useStatusUpdate() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (id: string) =>
      updateStatus(id),
    onMutate: async () => {
      console.log('updating status...');
    },
    onSuccess: () => {
      alert('Status updated!');
    },
  })

  return { mutate, isSuccess, isPending }
}
