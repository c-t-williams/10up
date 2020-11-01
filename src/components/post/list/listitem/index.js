import { format } from "date-fns";

const PostListItem = ({ date, fullAuthor, title, excerpt }) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/BlogPosting"
      className="post"
    >
      <header>
        <h2 itemProp="headline">{title.rendered}</h2>

        <div className="date">
          <strong>Publish Date</strong>:
          <span itemProp="datePublished">
            <time dateTime={format(new Date(date), "yyyy-MM-dd")}>
              {format(new Date(date), "MMM d, yyyy")}
            </time>
          </span>
        </div>

        <div className="author">
          <strong>Author</strong>:
          <span itemProp="author">{fullAuthor.name}</span>
        </div>
      </header>

      <div
        itemProp="articleBody"
        className="content"
        dangerouslySetInnerHTML={{
          __html: excerpt.rendered,
        }}
      />
    </article>
  );
};

export default PostListItem;
