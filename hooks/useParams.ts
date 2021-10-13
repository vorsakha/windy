import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const useParams = () => {
  const [params, setParams] = useState<string[]>([]);

  const router: NextRouterParams = useRouter();
  const pos = router.query.position;

  //   const position = new Promise<void>((resolve, reject) => {
  //     if (pos !== undefined) {
  //       resolve();
  //     }
  //   });

  useEffect(() => {
    // position.then(() => {
    //   pos !== undefined && setParams(pos);
    // });
    pos !== undefined && setParams(pos);
  }, [router]);

  return params;
};

export default useParams;
