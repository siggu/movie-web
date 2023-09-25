import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;
