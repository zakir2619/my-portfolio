

import { useEffect } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "My App"; // fallback title
    };
  }, [title]);
}

export default useDocumentTitle;