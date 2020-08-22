import React from 'react';
import { useRouter } from 'next/router';

const Article = () => {
  const { query: { articleId } } = useRouter();
  return(
    <div>
      Article: { articleId }
    </div>
  );
};

export default Article;