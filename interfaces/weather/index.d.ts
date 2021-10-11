interface NextRequest extends NextApiRequest {
  query: {
    id: [number, number];
  };
  method: string;
}
