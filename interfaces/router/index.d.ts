type NextRouterOld = Omit<NextRouter, "query">;
interface NextRouterParams extends NextRouterOld {
  query: {
    position?: [string, string];
  };
}
