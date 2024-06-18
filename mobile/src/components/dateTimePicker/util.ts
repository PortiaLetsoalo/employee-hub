import type {
  IShaDateTimePickerMutatedProps,
  IShaDateTimePickerProps,
} from './interface';
import { useState } from 'react';

export const useDateTime = ({
  onConfirm,
  onCancel,
  open,
  date,
  ...props
}: IShaDateTimePickerProps): IShaDateTimePickerMutatedProps => {
  const [selectedDate, setDate] = useState(new Date());
  const [openModal, setModalOpen] = useState(false);

  const onConfirmDate = (date: Date) => {
    setDate(date);
    onConfirm?.(date);
    setModalOpen(false);
  };

  const onCancelDate = () => {
    onCancel?.();
    setModalOpen(false);
  };

  const state: IShaDateTimePickerMutatedProps = {
    date: selectedDate,
    open: openModal,
    openModal: () => setModalOpen(true),
    closeModal: () => setModalOpen(false),
    onConfirm: onConfirmDate,
    onCancel: onCancelDate,
    ...props,
  };

  return { ...state };
};
