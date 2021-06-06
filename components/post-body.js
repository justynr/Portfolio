import markdownStyles from './styles/markdown-styles.module.css';

export default function PostBody({ content, classes }) {
  return (
    <div
      className={`${markdownStyles.markdown} ${classes}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
