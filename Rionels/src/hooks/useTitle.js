import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = "Rionel's | " + title;
  }, [title]);
};

export default useTitle;