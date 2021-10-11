interface NextRequest extends NextApiRequest {
  query: {
    position: [number, number];
  };
  method: string;
}
