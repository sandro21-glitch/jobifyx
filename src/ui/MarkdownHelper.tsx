const MarkdownHelper = () => {
  return (
    <div
      className="absolute left-3 top-3 opacity-0
     group-hover:opacity-100 transition-all ease-in duration-150"
    >
      <h4>Markdown-ის ფორმატირების რჩევები:</h4>
      <ul>
        <li>
          <b>სქელად:</b> <code>**სქელი ტექსტი**</code>
        </li>
        <li>
          <b>დახრილი:</b> <code>*დახრილი ტექსტი*</code>
        </li>
        <li>
          <b>ბმული:</b> <code>[ბმულის ტექსტი](https://example.com)</code>
        </li>
        <li>
          <b>უცნობილი სია:</b> <code>- პუნქტი</code>
        </li>
        <li>
          <b>რიცხვითი სია:</b> <code>1. პუნქტი</code>
        </li>
        <li>
          <b>სათაური:</b> <code># სათაური</code> (ერთ '#' სიმბოლოსთვის 1-ლი
          დონის სათაურისთვის, <br /> მეტი '#' სიმბოლო უფრო მცირე დონის
          სათაურებისთვის)
        </li>
      </ul>
    </div>
  );
};
export default MarkdownHelper;
