type PropsCard = {
  title: string;
  author: string;
  createdAt: string;
};

function MiniCard({ title, author, createdAt }: PropsCard) {
  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <p>{createdAt}</p>
    </>
  );
}

export default MiniCard;
