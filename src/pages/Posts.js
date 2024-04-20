function Posts({ post }) {
  const { id, titleName, userName, content } = post;

  return (
    <div className="post">
      <p>{id}</p>
      <h3 className="title">{titleName}</h3>
      <p>{content}</p>
      <h4 className="footer">{userName}</h4>
    </div>
  );
}

export default Posts;
