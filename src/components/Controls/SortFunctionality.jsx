import { useSortable } from '@dnd-kit/sortable';
import { Image } from '../Resources/Image';

export const SortFunctionality = (props) => {
  const sortable = useSortable({ id: props.url });

  return (
    <Image
      ref={sortable.setNodeRef}
      {...props}
      {...sortable.attributes}
      {...sortable.listeners}
    />
  );
};
