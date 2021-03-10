import React, { ReactElement, ReactNode } from "react";

export interface HeadingProps {
  title: string;
}
export const Heading = ({ title }: HeadingProps) => {
  return <h3>{title}</h3>;
};

interface ListProps<ListItem> {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}

export const List = <ListItem,>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

// function List<ListItem>({
//   items,
//   render,
// }: {
//   items: ListItem[];
//   render: (item: ListItem) => ReactNode;
// }) {
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{render(item)}</li>
//       ))}
//     </ul>
//   );
// }

const ReactTypeScript: React.FC = () => {
  return (
    <div>
      <Heading title="Hello" />
      <List
        items={["Name", "is", "undefined"]}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      />
    </div>
  );
};

export default ReactTypeScript;
