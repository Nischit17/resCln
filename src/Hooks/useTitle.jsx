import { useEffect } from "react";
const useTitle = (
  title = "Order food online from India's best food delivery service",
  tagLine = "",
) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title + tagLine;
    return () => {
      document.title = prevTitle;
    };
  });
};
export default useTitle;
